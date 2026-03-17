import { Source } from "@/sources/base";
import type { Novel, Chapter, ChapterContent, AbstactNovel } from "@/types/source";
import * as cheerio from "cheerio";

export class ArnoSource extends Source {
  constructor() {
    super({
      name: "ar-no",
      baseUrl: "https://ar-no.com/",
      version: "0.0.1",
      language: "ar",
    });
  }

  async search(query: string): Promise<AbstactNovel[]> {
    const url = new URL(this.baseUrl);
    url.searchParams.set("s", query);
    url.searchParams.set("post_type", "wp-manga");

    const $ = await this.fetchHtml(url.toString());

    const results: AbstactNovel[] = [];

    $(".c-tabs-item").each((_, element) => {
      const $el = $(element);
      const titleEl = $el.find(".post-title a");
      const title = titleEl.text().trim();
      const url = titleEl.attr("href") || "";
      const id = url.match(/\/novel\/([^\/]+)\/?/)?.[1] || "";
      const cover = $el.find(".tab-thumb img, .post-thumb img").attr("src") || "";

      if (title && id) {
        results.push({
          id,
          title,
          cover,
        });
      }
    });

    return results;
  }

  async fetchPopular(page: number): Promise<AbstactNovel[]> {
    const url = new URL(this.baseUrl);
    if (page > 1) {
      url.searchParams.set("paged", page.toString());
    }
    console.log(url);

    const $ = await this.fetchHtml(url.toString());

    const results: AbstactNovel[] = [];

    $(".popular-item-wrap .popular-content, .slider__item").each((_, element) => {
      const $el = $(element);
      const titleEl = $el.find(".post-title a").first();
      const title = titleEl.text().trim();
      const url = titleEl.attr("href") || "";
      const id = url.match(/\/novel\/([^\/]+)\/?/)?.[1] || "";
      const cover = $el.find(".slider__thumb_item img").attr("src") || "";

      if (title && id) {
        results.push({
          id,
          title,
          cover,
        });
      }
    });

    return results;
  }

  async fetchNovelInfo(novelId: string): Promise<Novel> {
    const url = new URL(`${this.baseUrl}novel/${novelId}/`);
    const $ = await this.fetchHtml(url.toString());

    const title = $(".post-title h1").text().trim();
    const cover = $(".summary_image img").attr("src") || "";
    const description = $(".description-summary .summary__content").text().trim();

    const author =
      $(".author-content a").text().trim() ||
      $(".post-content_item:contains('المؤلف') .summary-content").text().trim();

    const genres: string[] = [];
    $(".genres-content a").each((_, el) => {
      const genre = $(el).text().trim();
      if (genre) genres.push(genre);
    });

    let status = "";
    $(".post-content_item").each((_, el) => {
      const $el = $(el);
      const heading = $el.find("h5").text().trim();
      if (heading === "الحالة" || heading === "الحالة ") {
        status = $el.find(".summary-content").text().trim();
      }
    });

    const mangaId = $("#manga-chapters-holder").attr("data-id") || novelId;

    const chapters = await this.fetchChapters(mangaId);

    return {
      id: novelId,
      title,
      description,
      cover,
      author,
      genres,
      status,
      chapters,
    };
  }

  async fetchChapters(mangaId: string): Promise<Chapter[]> {
    const chaptersUrl = new URL(`${this.baseUrl}wp-admin/admin-ajax.php`);
    chaptersUrl.searchParams.set("action", "manga_get_chapters");
    chaptersUrl.searchParams.set("manga", mangaId);

    const response = await this.client.get(chaptersUrl.toString());
    const html = await response.text();
    const $ = cheerio.load(html);

    const chapters: Chapter[] = [];

    $("li.wp-manga-chapter").each((_: number, element: any) => {
      const $el = $(element);
      const link = $el.find("a");
      const url = link.attr("href") || "";
      const title = $el.find(".chapter-name").text().trim() || link.text().trim();
      const id = url.match(/\/([^\/]+)\/?$/)?.[1] || "";

      if (url && title) {
        chapters.push({
          id,
          title,
          url,
        });
      }
    });

    return chapters;
  }

  async fetchChapterContent(chapterId: string): Promise<ChapterContent> {
    const url = `${this.baseUrl}${chapterId}`;
    const $ = await this.fetchHtml(url);

    const title = $(".entry-title").text().trim() || $("h1").text().trim();

    let content = $(".reading-content, .c-blog-post .entry-content").text().trim();

    if (!content) {
      content = $(".c-blog-post .entry-content_wrap").text().trim();
    }

    return {
      title,
      content,
    };
  }
}
