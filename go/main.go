package main

import (
	"fmt"
	"github.com/novel/scraper/sources"
	"log"
)

func main() {
	fmt.Println("Testing Arno scraper...")

	result := sources.FetchPopular("arno", 1)
	if result.Error != "" {
		log.Fatalf("Error: %s", result.Error)
	}

	fmt.Printf("Found %d novels:\n", len(result.Novels))
	for i, novel := range result.Novels {
		if i >= 5 {
			break
		}
		fmt.Printf("  - %s (%s)\n", novel.Title, novel.ID)
	}

	if len(result.Novels) > 0 {
		novelID := result.Novels[0].ID
		fmt.Printf("\nFetching novel: %s\n", novelID)

		novelResult := sources.FetchNovel("arno", novelID)
		if novelResult.Error != "" {
			log.Fatalf("Error: %s", novelResult.Error)
		}
		fmt.Printf("Title: %s\n", novelResult.Novel.Title)
		fmt.Printf("Author: %s\n", novelResult.Novel.Author)
	}
}
