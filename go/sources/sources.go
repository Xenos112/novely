package sources

import "sync"

type SourceManager struct {
	scrapers map[string]Scraper
	mu       sync.RWMutex
}

var (
	manager     *SourceManager
	managerOnce sync.Once
)

func getManager() *SourceManager {
	managerOnce.Do(func() {
		manager = &SourceManager{
			scrapers: make(map[string]Scraper),
		}
		manager.registerScrapers()
	})
	return manager
}

func (m *SourceManager) registerScrapers() {
	m.mu.Lock()
	defer m.mu.Unlock()

	m.scrapers["arno"] = NewArnoScraper()
}

func (m *SourceManager) GetScraper(name string) Scraper {
	m.mu.RLock()
	defer m.mu.RUnlock()

	if scraper, ok := m.scrapers[name]; ok {
		return scraper
	}
	return nil
}

func (m *SourceManager) Names() []string {
	m.mu.RLock()
	defer m.mu.RUnlock()

	names := make([]string, 0, len(m.scrapers))
	for name := range m.scrapers {
		names = append(names, name)
	}
	return names
}

func GetScraper(name string) Scraper {
	return getManager().GetScraper(name)
}

func GetScraperNames() []string {
	return getManager().Names()
}

func FetchPopular(source string, page int) *PopularResult {
	scraper := GetScraper(source)
	if scraper == nil {
		return &PopularResult{Error: "source not found: " + source}
	}
	return scraper.FetchPopular(page)
}

func FetchNovel(source, novelID string) *NovelResult {
	scraper := GetScraper(source)
	if scraper == nil {
		return &NovelResult{Error: "source not found: " + source}
	}
	return scraper.FetchNovel(novelID)
}

func FetchChapters(source, novelSlug string) *ChaptersResult {
	scraper := GetScraper(source)
	if scraper == nil {
		return &ChaptersResult{Error: "source not found: " + source}
	}
	return scraper.FetchChapters(novelSlug)
}

func FetchChapterContent(source, chapterURL string) *ChapterContentResult {
	scraper := GetScraper(source)
	if scraper == nil {
		return &ChapterContentResult{Error: "source not found: " + source}
	}
	return scraper.FetchChapterContent(chapterURL)
}

func Search(source, query string) *SearchResult {
	scraper := GetScraper(source)
	if scraper == nil {
		return &SearchResult{Error: "source not found: " + source}
	}
	return scraper.Search(query)
}
