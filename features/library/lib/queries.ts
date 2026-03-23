import { eq } from 'drizzle-orm'
import {
  type Chapter,
  type Novel,
  type ChapterContentRow,
  chapterContent,
  chapters,
  novels,
  library,
} from '@/drizzle/schema'
import { db } from './db'

const novelQueries = {
  getAllNovels: async () => {
    return (await db.select().from(novels)) || []
  },
  getNovelById: async (id: number) => {
    const novel = await db.select().from(novels).where(eq(novels.id, id))
    return novel[0] || null
  },
  insertNovel: async (novelData: Novel) => {
    const newNovel = await db.insert(novels).values(novelData).returning()
    return newNovel[0] || null
  },
  setFavorite: async (id: number, isFavorite: boolean) => {
    await db.update(novels).set({ favorite: isFavorite }).where(eq(novels.id, id))
  },
  updateNovel: async (id: number, data: Partial<Novel>) => {
    await db.update(novels).set(data).where(eq(novels.id, id))
  },
  deleteNovel: async (id: number) => {
    await db.delete(novels).where(eq(novels.id, id))
  },
}

const chapterQueries = {
  getChapters: async (novelId: number) => {
    const novelChapters = await db.select().from(chapters).where(eq(chapters.novelId, novelId))
    return novelChapters || []
  },
  getChapterById: async (id: number) => {
    const chapter = await db.select().from(chapterContent).where(eq(chapters.id, id))
    return chapter[0] || null
  },
  insertChapters: async (chaptersData: Chapter[]) => {
    const newChapters = await db.insert(chapters).values(chaptersData).returning()
    return newChapters || []
  },
  downloadChapter: async (chapter: ChapterContentRow) => {
    const downloadedChapter = await db.insert(chapterContent).values(chapter).returning()
    return downloadedChapter[0] || null
  },
  deleteChapter: async (id: number) => {
    await db.delete(chapters).where(eq(chapters.id, id))
  },
}

const libraryQueries = {
  getLibrary: async () => {
    const libraryNovels = await db.select().from(library).where(eq(library.novelId, novels.id))
    return libraryNovels || []
  },
  addToLibrary: async (novelId: number) => {
    await db.insert(library).values({ novelId }).returning()
  },
  removeFromLibrary: async (novelId: number) => {
    await db.delete(library).where(eq(library.novelId, novelId))
  },
}
export { novelQueries, chapterQueries, libraryQueries }
