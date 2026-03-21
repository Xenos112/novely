import { NativeModules, Platform } from 'react-native'
import type { AbstactNovel, Chapter, ChapterContent, Novel } from '@/types/source'

const { ScraperModule } = NativeModules

type NativeScraperInterface = {
  fetchPopular(source: string, page: number): Promise<AbstactNovel[]>
  fetchNovelInfo(source: string, novelId: string): Promise<Novel>
  fetchChapters(source: string, novelSlug: string): Promise<Chapter[]>
  fetchChapterContent(source: string, chapterUrl: string): Promise<ChapterContent>
  search(source: string, query: string): Promise<AbstactNovel[]>
}

class NativeScraperFallback {
  async fetchPopular(_source: string, _page: number): Promise<AbstactNovel[]> {
    throw new Error('Native scraper not available')
  }
  async fetchNovelInfo(_source: string, _novelId: string): Promise<Novel> {
    throw new Error('Native scraper not available')
  }
  async fetchChapters(_source: string, _novelSlug: string): Promise<Chapter[]> {
    throw new Error('Native scraper not available')
  }
  async fetchChapterContent(_source: string, _chapterUrl: string): Promise<ChapterContent> {
    throw new Error('Native scraper not available')
  }
  async search(_source: string, _query: string): Promise<AbstactNovel[]> {
    throw new Error('Native scraper not available')
  }
}

const isNativeAvailable = Platform.OS === 'android' && ScraperModule

export const nativeScraper: NativeScraperInterface = isNativeAvailable
  ? (ScraperModule as NativeScraperInterface)
  : new NativeScraperFallback()

export async function nativeFetchPopular(source: string, page: number): Promise<AbstactNovel[]> {
  return nativeScraper.fetchPopular(source, page)
}

export async function nativeFetchNovelInfo(source: string, novelId: string): Promise<Novel> {
  return nativeScraper.fetchNovelInfo(source, novelId)
}

export async function nativeFetchChapters(source: string, novelSlug: string): Promise<Chapter[]> {
  return nativeScraper.fetchChapters(source, novelSlug)
}

export async function nativeFetchChapterContent(
  source: string,
  chapterUrl: string,
): Promise<ChapterContent> {
  return nativeScraper.fetchChapterContent(source, chapterUrl)
}

export async function nativeSearch(source: string, query: string): Promise<AbstactNovel[]> {
  return nativeScraper.search(source, query)
}
