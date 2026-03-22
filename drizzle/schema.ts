import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const novels = sqliteTable('novels', {
  id: int().primaryKey({ autoIncrement: true }),
  title: text(),
  author: text(),
  description: text(),
  genres: text({ mode: 'json' }).default('[]'),
  cover: text(),
  source: text(),
  status: text(),
})

export const chapters = sqliteTable('chapters', {
  id: text().primaryKey(),
  novelId: text()
    .notNull()
    .references(() => novels.id),
  title: text().notNull(),
  url: text().notNull(),
  order: int().notNull(),
})

export const chapterContent = sqliteTable('chapterContent', {
  chapterId: text()
    .primaryKey()
    .references(() => chapters.id),
  title: text().notNull(),
  content: text().notNull(),
  language: text().notNull(),
})

export const readingProgress = sqliteTable('readingProgress', {
  id: text().primaryKey(),
  novelId: text()
    .notNull()
    .references(() => novels.id),
  chapterId: text()
    .notNull()
    .references(() => chapters.id),
  scrollPosition: int().notNull().default(0),
  updatedAt: int({ mode: 'timestamp' }).notNull(),
})
export const library = sqliteTable('library', {
  novelId: text()
    .primaryKey()
    .references(() => novels.id),
})

export type Novel = typeof novels.$inferSelect
export type Chapter = typeof chapters.$inferSelect
export type ChapterContentRow = typeof chapterContent.$inferSelect
export type ReadingProgressRow = typeof readingProgress.$inferSelect
export type LibraryRow = typeof library.$inferSelect
