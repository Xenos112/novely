import { Source } from "@/sources/base";
import type {
	Novel,
	Chapter,
	ChapterContent,
	AbstactNovel
} from "@/types/source";
import * as cheerio from "cheerio";

export class ArnoSource extends Source {
	constructor() {
		super({
			name: "arno",
			baseUrl: "https://ar-no.com/",
			version: "0.0.1",
			language: "ar"
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
			const id = url.match(/\/novel\/([^/]+)\/?/)?.[1] || "";
			const cover =
				$el.find(".tab-thumb img, .post-thumb img").attr("src") || "";

			if (title && id) {
				results.push({
					id,
					title,
					cover,
					source: "arno"
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

		const $ = await this.fetchHtml(url.toString());

		const results: AbstactNovel[] = [];

		$(".popular-item-wrap .popular-content, .slider__item").each(
			(_, element) => {
				const $el = $(element);
				const titleEl = $el.find(".post-title a").first();
				const title = titleEl.text().trim();
				const url = titleEl.attr("href") || "";
				const id = url.match(/\/novel\/([^/]+)\/?/)?.[1] || "";
				const cover = $el.find(".slider__thumb_item img").attr("src") || "";

				if (title && id) {
					results.push({
						id,
						title,
						cover,
						source: "arno"
					});
				}
			}
		);

		return results;
	}

	async fetchNovelInfo(novelId: string): Promise<Novel> {
		const url = new URL(`${this.baseUrl}novel/${novelId}/`);
		const $ = await this.fetchHtml(url.toString());

		const title = $(".post-title h1").text().trim();
		const cover = $(".summary_image img").attr("src") || "";
		const description = $(".description-summary .summary__content")
			.text()
			.trim();

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

		return {
			id: novelId,
			source: "arno",
			title,
			description,
			cover,
			author,
			genres,
			status
		};
	}

	async fetchChapters(novelSlug?: string): Promise<Chapter[]> {
		if (!novelSlug) return [];

		try {
			const url = new URL(this.baseUrl);
			url.pathname = `/novel/${novelSlug}/ajax/chapters/`;

			const response = await this.client.post(url.toString(), {
				headers: {
					Accept: "text/html,application/xhtml+xml"
				}
			});

			const html = await response.text();
			const $ = cheerio.load(html);

			const chapters: Chapter[] = [];

			$(".wp-manga-chapter").each((_, element) => {
				const $el = $(element);
				const link = $el.find("a");
				const chapterUrl = link.attr("href") || "";
				const chapterTitle = link.text().trim();

				if (chapterUrl && chapterTitle) {
					chapters.push({
						id: chapterUrl,
						title: chapterTitle,
						url: chapterUrl
					});
				}
			});

			return chapters.toReversed();
		} catch (error) {
			console.error("Failed to fetch chapters:", error);
			return [];
		}
	}

	async fetchChapterContent(chapterId: string): Promise<ChapterContent> {
		const url = `${this.baseUrl}${chapterId}`;
		const $ = await this.fetchHtml(url);

		const title = $(".entry-title").text().trim() || $("h1").text().trim();

		let content = $(".reading-content, .c-blog-post .entry-content")
			.text()
			.trim();

		if (!content) {
			content = $(".c-blog-post .entry-content_wrap").text().trim();
		}

		return {
			title,
			content
		};
	}
}
