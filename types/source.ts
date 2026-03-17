import { Sources } from "@/sources";

export type Novel = {
  id: string;
  source: Sources;
  title: string;
  description: string;
  cover: string;
  author: string;
  genres: string[];
  status: string;
  chapters?: Chapter[];
};

export type Chapter = {
  id: string;
  title: string;
  url: string;
};

export type AbstactNovel = Omit<Novel, "chapters" | "status" | "genres" | "author" | "description">;

export type ChapterContent = {
  title: string;
  content: string;
};
