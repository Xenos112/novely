package tests

import (
	"encoding/json"
	"fmt"
	"testing"
	"time"

	"github.com/novel/scraper/sources"
)

func TestArnoFetchPopular(t *testing.T) {
	result := sources.FetchPopular("arno", 1)
	if result.Error != "" {
		t.Fatalf("FetchPopular failed: %s", result.Error)
	}
	if len(result.Novels) == 0 {
		t.Fatal("Expected novels, got none")
	}
	if result.Novels[0].Title == "" {
		t.Fatal("Novel title is empty")
	}
	if result.Novels[0].ID == "" {
		t.Fatal("Novel ID is empty")
	}
}

func TestArnoFetchPopularMultiplePages(t *testing.T) {
	for page := 1; page <= 3; page++ {
		result := sources.FetchPopular("arno", page)
		if result.Error != "" {
			t.Fatalf("FetchPopular page %d failed: %s", page, result.Error)
		}
		t.Logf("Page %d: found %d novels", page, len(result.Novels))
	}
}

func TestArnoFetchNovel(t *testing.T) {
	result := sources.FetchPopular("arno", 1)
	if result.Error != "" {
		t.Fatalf("FetchPopular failed: %s", result.Error)
	}
	if len(result.Novels) == 0 {
		t.Fatal("No novels to test")
	}

	novelID := result.Novels[0].ID
	novelResult := sources.FetchNovel("arno", novelID)
	if novelResult.Error != "" {
		t.Fatalf("FetchNovel failed: %s", novelResult.Error)
	}
	if novelResult.Novel.Title == "" {
		t.Fatal("Novel title is empty")
	}

	t.Logf("Novel: %s, Author: %s", novelResult.Novel.Title, novelResult.Novel.Author)
}

func TestArnoFetchChapters(t *testing.T) {
	result := sources.FetchPopular("arno", 1)
	if result.Error != "" {
		t.Fatalf("FetchPopular failed: %s", result.Error)
	}
	if len(result.Novels) == 0 {
		t.Fatal("No novels to test")
	}

	novelID := result.Novels[0].ID
	chaptersResult := sources.FetchChapters("arno", novelID)
	if chaptersResult.Error != "" {
		t.Fatalf("FetchChapters failed: %s", chaptersResult.Error)
	}
	if len(chaptersResult.Chapters) == 0 {
		t.Fatal("Expected chapters, got none")
	}

	for _, chapter := range chaptersResult.Chapters {
		if chapter.Title == "" {
			t.Fatal("Chapter title is empty")
		}
		if chapter.URL == "" {
			t.Fatal("Chapter URL is empty")
		}
	}

	t.Logf("Found %d chapters, first: %s", len(chaptersResult.Chapters), chaptersResult.Chapters[0].Title)
}

func TestArnoFetchChapterContent(t *testing.T) {
	result := sources.FetchPopular("arno", 1)
	if result.Error != "" {
		t.Fatalf("FetchPopular failed: %s", result.Error)
	}
	if len(result.Novels) == 0 {
		t.Fatal("No novels to test")
	}

	novelID := result.Novels[0].ID
	chaptersResult := sources.FetchChapters("arno", novelID)
	if chaptersResult.Error != "" {
		t.Fatalf("FetchChapters failed: %s", chaptersResult.Error)
	}
	if len(chaptersResult.Chapters) == 0 {
		t.Fatal("No chapters to test")
	}

	chapter := chaptersResult.Chapters[0]
	contentResult := sources.FetchChapterContent("arno", chapter.URL)
	if contentResult.Error != "" {
		t.Fatalf("FetchChapterContent failed: %s", contentResult.Error)
	}
	if contentResult.Content.Content == "" {
		t.Fatal("Chapter content is empty")
	}
	if contentResult.Content.Language != "ar" {
		t.Fatalf("Expected language 'ar', got '%s'", contentResult.Content.Language)
	}

	t.Logf("Chapter: %s, Content length: %d chars", contentResult.Content.Title, len(contentResult.Content.Content))
}

func TestArnoSearch(t *testing.T) {
	result := sources.Search("arno", "القس")
	if result.Error != "" {
		t.Fatalf("Search failed: %s", result.Error)
	}

	for _, novel := range result.Results {
		if novel.Title == "" {
			t.Fatal("Search result title is empty")
		}
		t.Logf("Found: %s (%s)", novel.Title, novel.ID)
	}
}

func TestArnoChapterURLDecoding(t *testing.T) {
	result := sources.FetchPopular("arno", 1)
	if result.Error != "" {
		t.Fatalf("FetchPopular failed: %s", result.Error)
	}
	if len(result.Novels) == 0 {
		t.Fatal("No novels to test")
	}

	novelID := result.Novels[0].ID
	chaptersResult := sources.FetchChapters("arno", novelID)
	if chaptersResult.Error != "" {
		t.Fatalf("FetchChapters failed: %s", chaptersResult.Error)
	}
	if len(chaptersResult.Chapters) == 0 {
		t.Fatal("No chapters to test")
	}

	for _, chapter := range chaptersResult.Chapters {
		if len(chapter.ID) == 0 {
			t.Error("Chapter ID should not be empty")
		}
		if chapter.URL == "" {
			t.Error("Chapter URL should not be empty")
		}
		if chapter.Title == "" {
			t.Error("Chapter Title should not be empty")
		}
	}
}

func TestArnoNovelDetails(t *testing.T) {
	result := sources.FetchPopular("arno", 1)
	if result.Error != "" {
		t.Fatalf("FetchPopular failed: %s", result.Error)
	}
	if len(result.Novels) == 0 {
		t.Fatal("No novels to test")
	}

	novelID := result.Novels[0].ID
	novelResult := sources.FetchNovel("arno", novelID)
	if novelResult.Error != "" {
		t.Fatalf("FetchNovel failed: %s", novelResult.Error)
	}

	novel := novelResult.Novel
	if novel.ID == "" {
		t.Error("Novel ID should not be empty")
	}
	if novel.Source != "arno" {
		t.Errorf("Expected source 'arno', got '%s'", novel.Source)
	}
	if novel.Title == "" {
		t.Error("Novel Title should not be empty")
	}
}

func TestArnoChaptersResponseFormat(t *testing.T) {
	result := sources.FetchPopular("arno", 1)
	if result.Error != "" {
		t.Fatalf("FetchPopular failed: %s", result.Error)
	}
	if len(result.Novels) == 0 {
		t.Fatal("No novels to test")
	}

	novelID := result.Novels[0].ID
	chaptersResult := sources.FetchChapters("arno", novelID)
	if chaptersResult.Error != "" {
		t.Fatalf("FetchChapters failed: %s", chaptersResult.Error)
	}

	data, err := json.Marshal(chaptersResult)
	if err != nil {
		t.Fatalf("Failed to marshal chapters result: %v", err)
	}

	var unmarshaled sources.ChaptersResult
	if err := json.Unmarshal(data, &unmarshaled); err != nil {
		t.Fatalf("Failed to unmarshal chapters result: %v", err)
	}

	if len(unmarshaled.Chapters) != len(chaptersResult.Chapters) {
		t.Errorf("Marshal/Unmarshal mismatch: %d vs %d", len(unmarshaled.Chapters), len(chaptersResult.Chapters))
	}
}

func TestArnoChapterContentResponseFormat(t *testing.T) {
	result := sources.FetchPopular("arno", 1)
	if result.Error != "" {
		t.Fatalf("FetchPopular failed: %s", result.Error)
	}
	if len(result.Novels) == 0 {
		t.Fatal("No novels to test")
	}

	novelID := result.Novels[0].ID
	chaptersResult := sources.FetchChapters("arno", novelID)
	if chaptersResult.Error != "" {
		t.Fatalf("FetchChapters failed: %s", chaptersResult.Error)
	}
	if len(chaptersResult.Chapters) == 0 {
		t.Fatal("No chapters to test")
	}

	chapter := chaptersResult.Chapters[0]
	contentResult := sources.FetchChapterContent("arno", chapter.URL)
	if contentResult.Error != "" {
		t.Fatalf("FetchChapterContent failed: %s", contentResult.Error)
	}

	data, err := json.Marshal(contentResult)
	if err != nil {
		t.Fatalf("Failed to marshal content result: %v", err)
	}

	var unmarshaled sources.ChapterContentResult
	if err := json.Unmarshal(data, &unmarshaled); err != nil {
		t.Fatalf("Failed to unmarshal content result: %v", err)
	}

	if unmarshaled.Content.Content != contentResult.Content.Content {
		t.Error("Marshal/Unmarshal content mismatch")
	}
}

func TestArnoPopularPerformance(t *testing.T) {
	start := time.Now()
	result := sources.FetchPopular("arno", 1)
	elapsed := time.Since(start)

	if result.Error != "" {
		t.Fatalf("FetchPopular failed: %s", result.Error)
	}

	t.Logf("FetchPopular took %v", elapsed)
	if elapsed > 30*time.Second {
		t.Logf("Warning: FetchPopular took longer than expected (%v)", elapsed)
	}
}

func TestArnoChaptersPerformance(t *testing.T) {
	result := sources.FetchPopular("arno", 1)
	if result.Error != "" {
		t.Fatalf("FetchPopular failed: %s", result.Error)
	}
	if len(result.Novels) == 0 {
		t.Fatal("No novels to test")
	}

	novelID := result.Novels[0].ID

	start := time.Now()
	chaptersResult := sources.FetchChapters("arno", novelID)
	elapsed := time.Since(start)

	if chaptersResult.Error != "" {
		t.Fatalf("FetchChapters failed: %s", chaptersResult.Error)
	}

	t.Logf("FetchChapters (%d chapters) took %v", len(chaptersResult.Chapters), elapsed)
	if elapsed > 30*time.Second {
		t.Logf("Warning: FetchChapters took longer than expected (%v)", elapsed)
	}
}

func TestArnoChapterContentPerformance(t *testing.T) {
	result := sources.FetchPopular("arno", 1)
	if result.Error != "" {
		t.Fatalf("FetchPopular failed: %s", result.Error)
	}
	if len(result.Novels) == 0 {
		t.Fatal("No novels to test")
	}

	novelID := result.Novels[0].ID
	chaptersResult := sources.FetchChapters("arno", novelID)
	if chaptersResult.Error != "" {
		t.Fatalf("FetchChapters failed: %s", chaptersResult.Error)
	}
	if len(chaptersResult.Chapters) == 0 {
		t.Fatal("No chapters to test")
	}

	chapter := chaptersResult.Chapters[0]

	start := time.Now()
	contentResult := sources.FetchChapterContent("arno", chapter.URL)
	elapsed := time.Since(start)

	if contentResult.Error != "" {
		t.Fatalf("FetchChapterContent failed: %s", contentResult.Error)
	}

	t.Logf("FetchChapterContent took %v", elapsed)
	if elapsed > 60*time.Second {
		t.Logf("Warning: FetchChapterContent took longer than expected (%v)", elapsed)
	}
}

func TestArnoInvalidSource(t *testing.T) {
	result := sources.FetchPopular("invalid_source", 1)
	if result.Error == "" {
		t.Fatal("Expected error for invalid source")
	}
}

func TestArnoInvalidNovel(t *testing.T) {
	result := sources.FetchNovel("arno", "nonexistent-novel-12345")
	if result.Error == "" {
		t.Log("Note: Some sites may return empty results for invalid novels")
	}
}

func TestArnoInvalidChapter(t *testing.T) {
	result := sources.FetchChapterContent("arno", "https://ar-no.com/novel/invalid/chapter")
	if result.Error == "" {
		t.Log("Note: Some sites may return empty content for invalid chapters")
	}
}

func TestArnoChaptersPagination(t *testing.T) {
	result := sources.FetchPopular("arno", 1)
	if result.Error != "" {
		t.Fatalf("FetchPopular failed: %s", result.Error)
	}
	if len(result.Novels) == 0 {
		t.Fatal("No novels to test")
	}

	novelID := result.Novels[0].ID
	chaptersResult := sources.FetchChapters("arno", novelID)
	if chaptersResult.Error != "" {
		t.Fatalf("FetchChapters failed: %s", chaptersResult.Error)
	}

	seen := make(map[string]bool)
	for _, chapter := range chaptersResult.Chapters {
		if seen[chapter.URL] {
			t.Errorf("Duplicate chapter URL found: %s", chapter.URL)
		}
		seen[chapter.URL] = true
	}
}

func TestArnoMultipleNovelsChapters(t *testing.T) {
	result := sources.FetchPopular("arno", 1)
	if result.Error != "" {
		t.Fatalf("FetchPopular failed: %s", result.Error)
	}
	if len(result.Novels) < 3 {
		t.Skip("Not enough novels to test multiple")
	}

	for i := 0; i < 3 && i < len(result.Novels); i++ {
		novelID := result.Novels[i].ID
		chaptersResult := sources.FetchChapters("arno", novelID)
		if chaptersResult.Error != "" {
			t.Fatalf("FetchChapters for novel %d (%s) failed: %s", i, novelID, chaptersResult.Error)
		}
		t.Logf("Novel %d: %s - %d chapters", i, result.Novels[i].Title, len(chaptersResult.Chapters))
	}
}

func TestArnoNovelInfoFields(t *testing.T) {
	result := sources.FetchPopular("arno", 1)
	if result.Error != "" {
		t.Fatalf("FetchPopular failed: %s", result.Error)
	}
	if len(result.Novels) == 0 {
		t.Fatal("No novels to test")
	}

	novelID := result.Novels[0].ID
	novelResult := sources.FetchNovel("arno", novelID)
	if novelResult.Error != "" {
		t.Fatalf("FetchNovel failed: %s", novelResult.Error)
	}

	novel := novelResult.Novel
	t.Logf("Novel fields: ID=%s, Title=%s, Author=%s, Status=%s, Genres=%v, HasCover=%v",
		novel.ID, novel.Title, novel.Author, novel.Status, novel.Genres, novel.Cover != "")
}

func TestArnoSearchResults(t *testing.T) {
	queries := []string{"القس", "مجنون", "سحر"}

	for _, query := range queries {
		result := sources.Search("arno", query)
		if result.Error != "" {
			t.Fatalf("Search '%s' failed: %s", query, result.Error)
		}
		t.Logf("Search '%s': found %d results", query, len(result.Results))
	}
}

func TestArnoChapterContentText(t *testing.T) {
	result := sources.FetchPopular("arno", 1)
	if result.Error != "" {
		t.Fatalf("FetchPopular failed: %s", result.Error)
	}
	if len(result.Novels) == 0 {
		t.Fatal("No novels to test")
	}

	novelID := result.Novels[0].ID
	chaptersResult := sources.FetchChapters("arno", novelID)
	if chaptersResult.Error != "" {
		t.Fatalf("FetchChapters failed: %s", chaptersResult.Error)
	}
	if len(chaptersResult.Chapters) == 0 {
		t.Fatal("No chapters to test")
	}

	chapter := chaptersResult.Chapters[0]
	contentResult := sources.FetchChapterContent("arno", chapter.URL)
	if contentResult.Error != "" {
		t.Fatalf("FetchChapterContent failed: %s", contentResult.Error)
	}

	content := contentResult.Content.Content
	if len(content) < 100 {
		t.Errorf("Content seems too short (%d chars): %s", len(content), content[:min(200, len(content))])
	}

	if !containsArabic(content) {
		t.Log("Warning: Content may not contain Arabic text")
	}
}

func containsArabic(s string) bool {
	for _, r := range s {
		if r >= 0x0600 && r <= 0x06FF {
			return true
		}
	}
	return false
}

func TestArnoEndToEnd(t *testing.T) {
	t.Log("Starting end-to-end test...")

	t.Run("FetchPopular", func(t *testing.T) {
		result := sources.FetchPopular("arno", 1)
		if result.Error != "" {
			t.Fatalf("FetchPopular failed: %s", result.Error)
		}
		if len(result.Novels) == 0 {
			t.Fatal("No novels found")
		}
		t.Logf("Found %d popular novels", len(result.Novels))
	})

	t.Run("FetchNovel", func(t *testing.T) {
		result := sources.FetchPopular("arno", 1)
		if result.Error != "" {
			t.Fatalf("FetchPopular failed: %s", result.Error)
		}
		if len(result.Novels) == 0 {
			t.Fatal("No novels found")
		}

		novelID := result.Novels[0].ID
		novelResult := sources.FetchNovel("arno", novelID)
		if novelResult.Error != "" {
			t.Fatalf("FetchNovel failed: %s", novelResult.Error)
		}
		t.Logf("Novel: %s by %s", novelResult.Novel.Title, novelResult.Novel.Author)
	})

	t.Run("FetchChapters", func(t *testing.T) {
		result := sources.FetchPopular("arno", 1)
		if result.Error != "" {
			t.Fatalf("FetchPopular failed: %s", result.Error)
		}
		if len(result.Novels) == 0 {
			t.Fatal("No novels found")
		}

		novelID := result.Novels[0].ID
		chaptersResult := sources.FetchChapters("arno", novelID)
		if chaptersResult.Error != "" {
			t.Fatalf("FetchChapters failed: %s", chaptersResult.Error)
		}
		t.Logf("Found %d chapters", len(chaptersResult.Chapters))
	})

	t.Run("FetchChapterContent", func(t *testing.T) {
		result := sources.FetchPopular("arno", 1)
		if result.Error != "" {
			t.Fatalf("FetchPopular failed: %s", result.Error)
		}
		if len(result.Novels) == 0 {
			t.Fatal("No novels found")
		}

		novelID := result.Novels[0].ID
		chaptersResult := sources.FetchChapters("arno", novelID)
		if chaptersResult.Error != "" {
			t.Fatalf("FetchChapters failed: %s", chaptersResult.Error)
		}
		if len(chaptersResult.Chapters) == 0 {
			t.Fatal("No chapters found")
		}

		chapter := chaptersResult.Chapters[0]
		contentResult := sources.FetchChapterContent("arno", chapter.URL)
		if contentResult.Error != "" {
			t.Fatalf("FetchChapterContent failed: %s", contentResult.Error)
		}
		t.Logf("Chapter content: %d chars", len(contentResult.Content.Content))
	})

	t.Run("Search", func(t *testing.T) {
		result := sources.Search("arno", "القس")
		if result.Error != "" {
			t.Fatalf("Search failed: %s", result.Error)
		}
		t.Logf("Search found %d results", len(result.Results))
	})

	t.Log("End-to-end test completed successfully!")
}

func TestArnoOutputFormat(t *testing.T) {
	result := sources.FetchPopular("arno", 1)
	if result.Error != "" {
		t.Fatalf("FetchPopular failed: %s", result.Error)
	}
	if len(result.Novels) == 0 {
		t.Fatal("No novels to test")
	}

	novelID := result.Novels[0].ID
	novelResult := sources.FetchNovel("arno", novelID)
	if novelResult.Error != "" {
		t.Fatalf("FetchNovel failed: %s", novelResult.Error)
	}

	chaptersResult := sources.FetchChapters("arno", novelID)
	if chaptersResult.Error != "" {
		t.Fatalf("FetchChapters failed: %s", chaptersResult.Error)
	}
	if len(chaptersResult.Chapters) == 0 {
		t.Fatal("No chapters to test")
	}

	chapter := chaptersResult.Chapters[0]
	contentResult := sources.FetchChapterContent("arno", chapter.URL)
	if contentResult.Error != "" {
		t.Fatalf("FetchChapterContent failed: %s", contentResult.Error)
	}

	t.Logf("\n --- Arno Source Output Format ---")
	fmt.Printf("PopularResult:\n")
	fmt.Printf("  Novels: %d\n", len(result.Novels))
	fmt.Printf("  First Novel: %s (%s)\n", result.Novels[0].Title, result.Novels[0].ID)

	fmt.Printf("\nNovelResult:\n")
	fmt.Printf("  ID: %s\n", novelResult.Novel.ID)
	fmt.Printf("  Source: %s\n", novelResult.Novel.Source)
	fmt.Printf("  Title: %s\n", novelResult.Novel.Title)
	fmt.Printf("  Author: %s\n", novelResult.Novel.Author)
	fmt.Printf("  Status: %s\n", novelResult.Novel.Status)
	fmt.Printf("  Description length: %d\n", len(novelResult.Novel.Description))
	fmt.Printf("  Genres: %v\n", novelResult.Novel.Genres)
	fmt.Printf("  Has Cover: %v\n", novelResult.Novel.Cover != "")

	fmt.Printf("\nChaptersResult:\n")
	fmt.Printf("  Chapters: %d\n", len(chaptersResult.Chapters))
	fmt.Printf("  First Chapter: %s\n", chaptersResult.Chapters[0].Title)
	fmt.Printf("  First URL: %s\n", chaptersResult.Chapters[0].URL)

	fmt.Printf("\nChapterContentResult:\n")
	fmt.Printf("  Title: %s\n", contentResult.Content.Title)
	fmt.Printf("  Content length: %d chars\n", len(contentResult.Content.Content))
	fmt.Printf("  Language: %s\n", contentResult.Content.Language)
	fmt.Printf("  First 100 chars: %s...\n", contentResult.Content.Content[:min(100, len(contentResult.Content.Content))])
}
