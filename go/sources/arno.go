package sources

import (
	"fmt"
	"io"
	"net/http"
	"net/url"
	"regexp"
	"strings"
	"time"

	"github.com/gocolly/colly/v2"
)

var (
	arNoTransport = &http.Transport{
		DisableKeepAlives:   false,
		MaxIdleConns:        100,
		MaxIdleConnsPerHost: 10,
		IdleConnTimeout:     90 * time.Second,
	}

	httpClient = &http.Client{
		Transport: arNoTransport,
		Timeout:   30 * time.Second,
	}

	regexChapterLI    = regexp.MustCompile(`<li class="wp-manga-chapter[^"]*"[^>]*>([\s\S]*?)</li>`)
	regexChapterURL   = regexp.MustCompile(`href="(https://ar-no\.com/novel/[^"]+)"`)
	regexChapterTitle = regexp.MustCompile(`>([^<]+)</a>`)
	regexNovelID      = regexp.MustCompile(`/novel/([^/]+)/?`)
	regexHTMLTags     = regexp.MustCompile(`<[^>]*>`)
	regexChapterHead  = regexp.MustCompile(`<h1[^>]*id="chapter-heading"[^>]*>([\s\S]*?)</h1>`)
	regexContentDiv   = regexp.MustCompile(`<div class="reading-content"[^>]*>([\s\S]*?)</div>`)
)

type ArnoScraper struct {
	baseURL   string
	userAgent string
}

func NewArnoScraper() *ArnoScraper {
	return &ArnoScraper{
		baseURL:   "https://ar-no.com",
		userAgent: "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
	}
}

func (s *ArnoScraper) Name() string {
	return "arno"
}

func (s *ArnoScraper) createCollector() *colly.Collector {
	c := colly.NewCollector(
		colly.UserAgent(s.userAgent),
		colly.AllowedDomains("ar-no.com", "www.ar-no.com"),
		colly.MaxDepth(1),
		colly.Async(true),
		colly.IgnoreRobotsTxt(),
	)

	c.Limit(&colly.LimitRule{
		DomainGlob:  "*",
		Parallelism: 6,
		Delay:       50 * time.Millisecond,
	})

	c.OnError(func(_ *colly.Response, err error) {
		fmt.Printf("Scraper error: %v\n", err)
	})

	return c
}

func (s *ArnoScraper) FetchPopular(page int) *PopularResult {
	novels := make([]AbstractNovel, 0, 20)

	pageURL := s.baseURL
	if page > 1 {
		pageURL = fmt.Sprintf("%s/?paged=%d", s.baseURL, page)
	}

	c := s.createCollector()

	c.OnHTML(".popular-item-wrap .popular-content, .slider__item", func(e *colly.HTMLElement) {
		titleEl := e.DOM.Find(".post-title a").First()
		title := strings.TrimSpace(titleEl.Text())

		href, _ := titleEl.Attr("href")
		id := s.extractNovelID(href)
		if id == "" || title == "" {
			return
		}

		coverEl := e.DOM.Find(".slider__thumb_item img, .tab-thumb img").First()
		cover, _ := coverEl.Attr("src")

		novels = append(novels, AbstractNovel{
			ID:     id,
			Source: "arno",
			Title:  title,
			Cover:  cover,
		})
	})

	err := c.Visit(pageURL)
	if err != nil {
		return &PopularResult{Error: fmt.Sprintf("failed to fetch popular: %v", err)}
	}

	c.Wait()
	return &PopularResult{Novels: novels}
}

func (s *ArnoScraper) FetchNovel(novelID string) *NovelResult {
	novel := &Novel{
		ID:     novelID,
		Source: "arno",
	}
	url := fmt.Sprintf("%s/novel/%s/", s.baseURL, novelID)

	c := s.createCollector()

	c.OnHTML(".post-title h1", func(e *colly.HTMLElement) {
		novel.Title = strings.TrimSpace(e.Text)
	})

	c.OnHTML(".summary_image img", func(e *colly.HTMLElement) {
		novel.Cover, _ = e.DOM.Attr("src")
	})

	c.OnHTML(".description-summary .summary__content", func(e *colly.HTMLElement) {
		novel.Description = strings.TrimSpace(e.Text)
	})

	c.OnHTML(".author-content a", func(e *colly.HTMLElement) {
		novel.Author = strings.TrimSpace(e.Text)
	})

	c.OnHTML(".genres-content a", func(e *colly.HTMLElement) {
		genre := strings.TrimSpace(e.Text)
		if genre != "" {
			novel.Genres = append(novel.Genres, genre)
		}
	})

	c.OnHTML(".post-content_item", func(e *colly.HTMLElement) {
		heading := strings.TrimSpace(e.DOM.Find("h5").First().Text())
		if heading == "الحالة" || heading == "الحالة " {
			novel.Status = strings.TrimSpace(e.DOM.Find(".summary-content").First().Text())
		}
	})

	err := c.Visit(url)
	if err != nil {
		return &NovelResult{Error: fmt.Sprintf("failed to fetch novel: %v", err)}
	}

	c.Wait()

	if novel.Title == "" {
		return &NovelResult{Error: "novel not found"}
	}

	return &NovelResult{Novel: novel}
}

func (s *ArnoScraper) FetchChapters(novelSlug string) *ChaptersResult {
	novelURL := fmt.Sprintf("%s/novel/%s/", s.baseURL, novelSlug)

	body, err := s.fetchAJAXChapters(novelURL)
	if err != nil {
		return &ChaptersResult{Error: fmt.Sprintf("failed to fetch chapters: %v", err)}
	}

	decodedSlug, _ := url.QueryUnescape(novelSlug)
	chapterCount := strings.Count(body, `wp-manga-chapter`)
	chapters := make([]Chapter, 0, chapterCount)

	seen := make(map[string]bool, chapterCount)

	liMatches := regexChapterLI.FindAllStringSubmatch(body, -1)
	for _, liMatch := range liMatches {
		if len(liMatch) < 2 {
			continue
		}

		liContent := liMatch[1]

		urlMatch := regexChapterURL.FindStringSubmatch(liContent)
		titleMatch := regexChapterTitle.FindStringSubmatch(liContent)

		if len(urlMatch) > 1 && len(titleMatch) > 1 {
			rawURL := urlMatch[1]
			title := strings.TrimSpace(titleMatch[1])

			decodedURL, _ := url.QueryUnescape(rawURL)

			if strings.Contains(decodedURL, "/novel/"+decodedSlug+"/") &&
				!strings.Contains(decodedURL, "/feed") && !seen[rawURL] {
				seen[rawURL] = true

				parts := strings.Split(decodedURL, "/novel/"+decodedSlug+"/")
				if len(parts) > 1 {
					chapterPath := strings.TrimSuffix(parts[1], "/")
					if chapterPath != "" {
						chapters = append(chapters, Chapter{
							ID:    rawURL,
							Title: title,
							URL:   rawURL,
						})
					}
				}
			}
		}
	}

	for i, j := 0, len(chapters)-1; i < j; i, j = i+1, j-1 {
		chapters[i], chapters[j] = chapters[j], chapters[i]
	}

	return &ChaptersResult{Chapters: chapters}
}

func (s *ArnoScraper) fetchAJAXChapters(novelURL string) (string, error) {
	ajaxURL := novelURL + "ajax/chapters/?t=1"

	req, err := http.NewRequest("POST", ajaxURL, nil)
	if err != nil {
		return "", err
	}
	req.Header.Set("User-Agent", s.userAgent)
	req.Header.Set("X-Requested-With", "XMLHttpRequest")

	resp, err := httpClient.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}

	return string(body), nil
}

func (s *ArnoScraper) FetchChapterContent(chapterURL string) *ChapterContentResult {
	content := &ChapterContent{}

	resp, err := httpClient.Get(chapterURL)
	if err != nil {
		return &ChapterContentResult{Error: fmt.Sprintf("failed to fetch chapter: %v", err)}
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return &ChapterContentResult{Error: fmt.Sprintf("failed to read chapter: %v", err)}
	}

	html := string(body)

	titleMatch := regexChapterHead.FindStringSubmatch(html)
	if len(titleMatch) > 1 {
		content.Title = strings.TrimSpace(regexHTMLTags.ReplaceAllString(titleMatch[1], ""))
	}

	contentMatch := regexContentDiv.FindStringSubmatch(html)
	if len(contentMatch) > 1 {
		innerHTML := contentMatch[1]

		innerHTML = strings.ReplaceAll(innerHTML, "<br>", "\n")
		innerHTML = strings.ReplaceAll(innerHTML, "<br/>", "\n")
		innerHTML = strings.ReplaceAll(innerHTML, "<br />", "\n")
		innerHTML = strings.ReplaceAll(innerHTML, "</p>", "</p>\n")

		text := regexHTMLTags.ReplaceAllString(innerHTML, "")
		text = strings.ReplaceAll(text, "\n\n\n", "\n\n")
		text = strings.TrimSpace(text)

		paragraphs := strings.Split(text, "\n\n")
		filtered := paragraphs[:0]
		for _, p := range paragraphs {
			p = strings.TrimSpace(p)
			if p != "" {
				filtered = append(filtered, p)
			}
		}

		content.Content = strings.Join(filtered, "\n\n")
	}

	if content.Content == "" {
		return &ChapterContentResult{Error: "chapter content not found"}
	}

	content.Language = "ar"

	return &ChapterContentResult{Content: content}
}

func (s *ArnoScraper) Search(query string) *SearchResult {
	results := make([]AbstractNovel, 0, 20)
	searchURL := fmt.Sprintf("%s/?s=%s&post_type=wp-manga", s.baseURL, query)

	c := s.createCollector()

	c.OnHTML(".c-tabs-item", func(e *colly.HTMLElement) {
		titleEl := e.DOM.Find(".post-title a").First()
		title := strings.TrimSpace(titleEl.Text())

		href, _ := titleEl.Attr("href")
		id := s.extractNovelID(href)
		if id == "" || title == "" {
			return
		}

		coverEl := e.DOM.Find(".tab-thumb img, .post-thumb img").First()
		cover, _ := coverEl.Attr("src")

		results = append(results, AbstractNovel{
			ID:     id,
			Source: "arno",
			Title:  title,
			Cover:  cover,
		})
	})

	err := c.Visit(searchURL)
	if err != nil {
		return &SearchResult{Error: fmt.Sprintf("search failed: %v", err)}
	}

	c.Wait()
	return &SearchResult{Results: results}
}

func (s *ArnoScraper) extractNovelID(pageURL string) string {
	matches := regexNovelID.FindStringSubmatch(pageURL)
	if len(matches) > 1 {
		return matches[1]
	}
	return ""
}

func NewArno() Scraper {
	return NewArnoScraper()
}
