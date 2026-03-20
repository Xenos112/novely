import type { AbstactNovel, Chapter, ChapterContent, Novel } from '@/types/source'

export type SourceOptions = {
  name: string
  baseUrl: string
  version: string
  language: string
}

export abstract class Source {
  public name: string
  public baseUrl: string
  public version: string
  public language: string

  constructor(options: SourceOptions) {
    this.name = options.name
    this.baseUrl = options.baseUrl
    this.version = options.version
    this.language = options.language
  }

  abstract search(query: string): Promise<AbstactNovel[]>
  abstract fetchPopular(page: number): Promise<AbstactNovel[]>
  abstract fetchNovelInfo(novelId: string): Promise<Novel>
  abstract fetchChapters(novelId: string): Promise<Chapter[]>
  abstract fetchChapterContent(chapterId: string): Promise<ChapterContent>
}
