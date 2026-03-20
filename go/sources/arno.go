package sources

import (
	"fmt"
	"regexp"
	"strings"

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
	url := fmt.Sprintf("%s/novel/%s/ajax/chapters/", s.baseURL, novelSlug)

	c := s.createCollector()

	c.OnHTML(".wp-manga-chapter", func(e *colly.HTMLElement) {
		linkEl := e.DOM.Find("a").First()
		chapterURL, _ := linkEl.Attr("href")
		chapterTitle := strings.TrimSpace(linkEl.Text())

		if chapterURL != "" && chapterTitle != "" {
			chapters = append(chapters, Chapter{
				ID:    chapterURL,
				Title: chapterTitle,
				URL:   chapterURL,
			})
		}
	})

	c.SetRequestTimeout(15000)

	err := c.Post(url, nil)
	if err != nil {
		return &ChaptersResult{Error: fmt.Sprintf("failed to fetch chapters: %v", err)}
	}

	c.Wait()

	for i, j := 0, len(chapters)-1; i < j; i, j = i+1, j-1 {
		chapters[i], chapters[j] = chapters[j], chapters[i]
	}

	return &ChaptersResult{Chapters: chapters}
}

func (s *ArnoScraper) FetchChapterContent(chapterURL string) *ChapterContentResult {
	content := &ChapterContent{}

	c := s.createCollector()

	c.OnHTML(".entry-title, h1", func(e *colly.HTMLElement) {
		if content.Title == "" {
			content.Title = strings.TrimSpace(e.Text)
		}
	})

	c.OnHTML(".reading-content, .c-blog-post .entry-content, .c-blog-post .entry-content_wrap", func(e *colly.HTMLElement) {
		html, _ := e.DOM.Html()

		html = strings.ReplaceAll(html, "<br>", "\n")
		html = strings.ReplaceAll(html, "<br/>", "\n")
		html = strings.ReplaceAll(html, "<br />", "\n")
		html = strings.ReplaceAll(html, "</p>", "</p>\n")

		text := stripHTMLTags(html)
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
	})

	c.SetRequestTimeout(15000)

	err := c.Visit(chapterURL)
	if err != nil {
		return &ChapterContentResult{Error: fmt.Sprintf("failed to fetch chapter: %v", err)}
	}

	c.Wait()

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
