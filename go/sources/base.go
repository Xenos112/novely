package sources

import "encoding/json"

type Novel struct {
	ID          string
	Source      string
	Title       string
	Description string
	Cover       string
	Author      string
	Genres      []string
	Status      string
}

type Chapter struct {
	ID    string
	Title string
	URL   string
}

type ChapterContent struct {
	Title    string
	Content  string
	Language string
}

type AbstractNovel struct {
	ID     string
	Source string
	Title  string
	Cover  string
}

type PopularResult struct {
	Novels []AbstractNovel
	Error  string
}

type NovelResult struct {
	Novel *Novel
	Error string
}

type ChaptersResult struct {
	Chapters []Chapter
	Error    string
}

type ChapterContentResult struct {
	Content *ChapterContent
	Error   string
}

type SearchResult struct {
	Results []AbstractNovel
	Error   string
}

type Scraper interface {
	Name() string
	FetchPopular(page int) *PopularResult
	FetchNovel(novelID string) *NovelResult
	FetchChapters(novelSlug string) *ChaptersResult
	FetchChapterContent(chapterURL string) *ChapterContentResult
	Search(query string) *SearchResult
}

type ScraperFactory interface {
	GetScraper(name string) Scraper
	Names() []string
}

type ExportedNovel struct {
	ID          string
	Source      string
	Title       string
	Description string
	Cover       string
	Author      string
	Genres      string
	Status      string
}

type ExportedChapter struct {
	ID    string
	Title string
	URL   string
}

type ExportedChapterContent struct {
	Title    string
	Content  string
	Language string
}

type ExportedAbstractNovel struct {
	ID     string
	Source string
	Title  string
	Cover  string
}

type ExportedResult struct {
	Success bool
	Data    string
	Error   string
}

func ToExportedNovel(n *Novel) *ExportedNovel {
	genres, _ := json.Marshal(n.Genres)
	return &ExportedNovel{
		ID:          n.ID,
		Source:      n.Source,
		Title:       n.Title,
		Description: n.Description,
		Cover:       n.Cover,
		Author:      n.Author,
		Genres:      string(genres),
		Status:      n.Status,
	}
}

func ToExportedAbstractNovel(n AbstractNovel) *ExportedAbstractNovel {
	return &ExportedAbstractNovel{
		ID:     n.ID,
		Source: n.Source,
		Title:  n.Title,
		Cover:  n.Cover,
	}
}

func ToExportedChapter(c Chapter) *ExportedChapter {
	return &ExportedChapter{
		ID:    c.ID,
		Title: c.Title,
		URL:   c.URL,
	}
}

func ToExportedChapterContent(c *ChapterContent) *ExportedChapterContent {
	return &ExportedChapterContent{
		Title:    c.Title,
		Content:  c.Content,
		Language: c.Language,
	}
}

func FetchPopularJSON(source string, page int) *ExportedResult {
	scraper := GetScraper(source)
	if scraper == nil {
		return &ExportedResult{Success: false, Error: "source not found: " + source}
	}
	result := scraper.FetchPopular(page)
	if result.Error != "" {
		return &ExportedResult{Success: false, Error: result.Error}
	}
	exported := make([]*ExportedAbstractNovel, len(result.Novels))
	for i, n := range result.Novels {
		exported[i] = ToExportedAbstractNovel(n)
	}
	data, err := json.Marshal(exported)
	if err != nil {
		return &ExportedResult{Success: false, Error: err.Error()}
	}
	return &ExportedResult{Success: true, Data: string(data)}
}

func FetchNovelJSON(source, novelID string) *ExportedResult {
	scraper := GetScraper(source)
	if scraper == nil {
		return &ExportedResult{Success: false, Error: "source not found: " + source}
	}
	result := scraper.FetchNovel(novelID)
	if result.Error != "" {
		return &ExportedResult{Success: false, Error: result.Error}
	}
	data, err := json.Marshal(ToExportedNovel(result.Novel))
	if err != nil {
		return &ExportedResult{Success: false, Error: err.Error()}
	}
	return &ExportedResult{Success: true, Data: string(data)}
}

func FetchChaptersJSON(source, novelSlug string) *ExportedResult {
	scraper := GetScraper(source)
	if scraper == nil {
		return &ExportedResult{Success: false, Error: "source not found: " + source}
	}
	result := scraper.FetchChapters(novelSlug)
	if result.Error != "" {
		return &ExportedResult{Success: false, Error: result.Error}
	}
	exported := make([]*ExportedChapter, len(result.Chapters))
	for i, c := range result.Chapters {
		exported[i] = ToExportedChapter(c)
	}
	data, err := json.Marshal(exported)
	if err != nil {
		return &ExportedResult{Success: false, Error: err.Error()}
	}
	return &ExportedResult{Success: true, Data: string(data)}
}

func FetchChapterContentJSON(source, chapterURL string) *ExportedResult {
	scraper := GetScraper(source)
	if scraper == nil {
		return &ExportedResult{Success: false, Error: "source not found: " + source}
	}
	result := scraper.FetchChapterContent(chapterURL)
	if result.Error != "" {
		return &ExportedResult{Success: false, Error: result.Error}
	}
	data, err := json.Marshal(ToExportedChapterContent(result.Content))
	if err != nil {
		return &ExportedResult{Success: false, Error: err.Error()}
	}
	return &ExportedResult{Success: true, Data: string(data)}
}

func SearchJSON(source, query string) *ExportedResult {
	scraper := GetScraper(source)
	if scraper == nil {
		return &ExportedResult{Success: false, Error: "source not found: " + source}
	}
	result := scraper.Search(query)
	if result.Error != "" {
		return &ExportedResult{Success: false, Error: result.Error}
	}
	exported := make([]*ExportedAbstractNovel, len(result.Results))
	for i, n := range result.Results {
		exported[i] = ToExportedAbstractNovel(n)
	}
	data, err := json.Marshal(exported)
	if err != nil {
		return &ExportedResult{Success: false, Error: err.Error()}
	}
	return &ExportedResult{Success: true, Data: string(data)}
}
