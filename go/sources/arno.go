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
		Parallelism: 4,
		Delay:       100e6,
	})

	c.OnError(func(_ *colly.Response, err error) {
		fmt.Printf("Scraper error: %v\n", err)
	})

	return c
}

func (s *ArnoScraper) FetchPopular(page int) *PopularResult {
	novels := make([]AbstractNovel, 0)

	url := s.baseURL
	if page > 1 {
		url = fmt.Sprintf("%s/?paged=%d", s.baseURL, page)
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

	err := c.Visit(url)
	if err != nil {
		return &PopularResult{Error: fmt.Sprintf("failed to fetch popular: %v", err)}
	}

	c.Wait()
	return &PopularResult{Novels: novels}
}

func (s *ArnoScraper) FetchNovel(novelID string) *NovelResult {
	novel := &Novel{}
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

	novel.ID = novelID
	novel.Source = "arno"

	return &NovelResult{Novel: novel}
}

func (s *ArnoScraper) FetchChapters(novelSlug string) *ChaptersResult {
	chapters := make([]Chapter, 0)

	novelURL := fmt.Sprintf("%s/novel/%s/", s.baseURL, novelSlug)

	body, err := s.fetchAJAXChapters(novelURL)
	if err != nil {
		return &ChaptersResult{Error: fmt.Sprintf("failed to fetch chapters: %v", err)}
	}

	decodedSlug, _ := url.QueryUnescape(novelSlug)

	liPattern := regexp.MustCompile(`<li class="wp-manga-chapter[^"]*"[^>]*>([\s\S]*?)</li>`)
	liMatches := liPattern.FindAllStringSubmatch(body, -1)

	seen := make(map[string]bool)
	for _, liMatch := range liMatches {
		if len(liMatch) < 2 {
			continue
		}

		liContent := liMatch[1]

		urlPattern := regexp.MustCompile(`href="(https://ar-no\.com/novel/[^"]+)"`)
		urlMatch := urlPattern.FindStringSubmatch(liContent)

		titlePattern := regexp.MustCompile(`>([^<]+)</a>`)
		titleMatch := titlePattern.FindStringSubmatch(liContent)

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

	return &ChaptersResult{Chapters: chapters}
}

func (s *ArnoScraper) fetchHTML(url string) (string, error) {
	var body []byte
	var fetchErr error

	c := colly.NewCollector(
		colly.UserAgent(s.userAgent),
		colly.AllowedDomains("ar-no.com", "www.ar-no.com"),
	)

	c.OnResponse(func(r *colly.Response) {
		body = r.Body
	})

	c.OnError(func(_ *colly.Response, err error) {
		fetchErr = err
	})

	err := c.Visit(url)
	if err != nil {
		return "", err
	}
	c.Wait()

	if fetchErr != nil {
		return "", fetchErr
	}

	return string(body), nil
}

func (s *ArnoScraper) fetchAJAXChapters(novelURL string) (string, error) {
	ajaxURL := novelURL + "ajax/chapters/?t=1"

	req, err := http.NewRequest("POST", ajaxURL, nil)
	if err != nil {
		return "", err
	}
	req.Header.Set("User-Agent", s.userAgent)
	req.Header.Set("X-Requested-With", "XMLHttpRequest")

	client := &http.Client{}
	resp, err := client.Do(req)
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

	client := &http.Client{Timeout: 30 * time.Second}
	resp, err := client.Get(chapterURL)
	if err != nil {
		return &ChapterContentResult{Error: fmt.Sprintf("failed to fetch chapter: %v", err)}
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return &ChapterContentResult{Error: fmt.Sprintf("failed to read chapter: %v", err)}
	}

	html := string(body)

	titlePattern := regexp.MustCompile(`<h1[^>]*id="chapter-heading"[^>]*>([\s\S]*?)</h1>`)
	titleMatch := titlePattern.FindStringSubmatch(html)
	if len(titleMatch) > 1 {
		content.Title = strings.TrimSpace(stripHTMLTags(titleMatch[1]))
	}

	contentPattern := regexp.MustCompile(`<div class="reading-content"[^>]*>([\s\S]*?)</div>`)
	contentMatch := contentPattern.FindStringSubmatch(html)
	if len(contentMatch) > 1 {
		innerHTML := contentMatch[1]

		innerHTML = strings.ReplaceAll(innerHTML, "<br>", "\n")
		innerHTML = strings.ReplaceAll(innerHTML, "<br/>", "\n")
		innerHTML = strings.ReplaceAll(innerHTML, "<br />", "\n")
		innerHTML = strings.ReplaceAll(innerHTML, "</p>", "</p>\n")

		text := stripHTMLTags(innerHTML)
		text = strings.ReplaceAll(text, "\n\n\n", "\n\n")
		text = strings.TrimSpace(text)

		paragraphs := strings.Split(text, "\n\n")
		var filtered []string
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
	results := make([]AbstractNovel, 0)
	url := fmt.Sprintf("%s/?s=%s&post_type=wp-manga", s.baseURL, query)

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

	err := c.Visit(url)
	if err != nil {
		return &SearchResult{Error: fmt.Sprintf("search failed: %v", err)}
	}

	c.Wait()
	return &SearchResult{Results: results}
}

func (s *ArnoScraper) extractNovelID(url string) string {
	re := regexp.MustCompile(`/novel/([^/]+)/?`)
	matches := re.FindStringSubmatch(url)
	if len(matches) > 1 {
		return matches[1]
	}
	return ""
}

func stripHTMLTags(html string) string {
	re := regexp.MustCompile(`<[^>]*>`)
	return re.ReplaceAllString(html, "")
}

func NewArno() Scraper {
	return NewArnoScraper()
}
