import { Source } from './base'
import {
  nativeFetchPopular,
  nativeFetchNovelInfo,
  nativeFetchChapters,
  nativeFetchChapterContent,
  nativeSearch,
} from './native/Scraper'
import type { AbstactNovel, Chapter, ChapterContent, Novel } from '@/types/source'

export abstract class NativeSource extends Source {
  async search(query: string): Promise<AbstactNovel[]> {
    return nativeSearch(this.name, query)
  }

  async fetchPopular(page: number): Promise<AbstactNovel[]> {
    return nativeFetchPopular(this.name, page)
  }

  async fetchNovelInfo(novelId: string): Promise<Novel> {
    return nativeFetchNovelInfo(this.name, novelId)
  }

  async fetchChapters(novelId: string): Promise<Chapter[]> {
    return nativeFetchChapters(this.name, novelId)
  }

  async fetchChapterContent(chapterId: string): Promise<ChapterContent> {
    return nativeFetchChapterContent(this.name, chapterId)
  }
}
