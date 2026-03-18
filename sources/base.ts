import * as cheerio from 'cheerio'
import ky, { type KyInstance } from 'ky'
import { HTTP } from '@/constants/config'
import type { AbstactNovel, Chapter, ChapterContent, Novel } from '@/types/source'

export type SourceOptions = {
  name: string
  baseUrl: string
  version: string
  language: string
  userAgent?: string
}

export abstract class Source {
  public name: string
  public baseUrl: string
  public version: string
  public language: string
  protected client: KyInstance

  constructor(options: SourceOptions) {
    this.name = options.name
    this.baseUrl = options.baseUrl
    this.version = options.version
    this.language = options.language
    this.client = ky.create({
      cache: HTTP.CACHE,
      timeout: HTTP.TIMEOUT,
      headers: {
        'User-Agent':
          options.userAgent ?? 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    })
  }

  async fetchHtml(url: string) {
    const response = await this.client.get(url)
    const html = await response.text()
    const $ = cheerio.load(html)
    return $
  }

  abstract search(query: string): Promise<AbstactNovel[]>
  abstract fetchPopular(page: number): Promise<AbstactNovel[]>
  abstract fetchNovelInfo(novelId: string): Promise<Novel>
  abstract fetchChapters(novelId: string): Promise<Chapter[]>
  abstract fetchChapterContent(chapterId: string): Promise<ChapterContent>
}
