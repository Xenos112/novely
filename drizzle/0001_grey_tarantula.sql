PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_chapterContent` (
	`chapterId` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`language` text NOT NULL,
	FOREIGN KEY (`chapterId`) REFERENCES `chapters`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_chapterContent`("chapterId", "title", "content", "language") SELECT "chapterId", "title", "content", "language" FROM `chapterContent`;--> statement-breakpoint
DROP TABLE `chapterContent`;--> statement-breakpoint
ALTER TABLE `__new_chapterContent` RENAME TO `chapterContent`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_chapters` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`novelId` integer NOT NULL,
	`title` text NOT NULL,
	`url` text NOT NULL,
	`order` integer NOT NULL,
	FOREIGN KEY (`novelId`) REFERENCES `novels`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_chapters`("id", "novelId", "title", "url", "order") SELECT "id", "novelId", "title", "url", "order" FROM `chapters`;--> statement-breakpoint
DROP TABLE `chapters`;--> statement-breakpoint
ALTER TABLE `__new_chapters` RENAME TO `chapters`;--> statement-breakpoint
CREATE TABLE `__new_library` (
	`novelId` integer PRIMARY KEY NOT NULL,
	FOREIGN KEY (`novelId`) REFERENCES `novels`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_library`("novelId") SELECT "novelId" FROM `library`;--> statement-breakpoint
DROP TABLE `library`;--> statement-breakpoint
ALTER TABLE `__new_library` RENAME TO `library`;--> statement-breakpoint
CREATE TABLE `__new_readingProgress` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`novelId` integer NOT NULL,
	`chapterId` integer NOT NULL,
	`scrollPosition` integer DEFAULT 0 NOT NULL,
	`updatedAt` integer NOT NULL,
	FOREIGN KEY (`novelId`) REFERENCES `novels`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`chapterId`) REFERENCES `chapters`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_readingProgress`("id", "novelId", "chapterId", "scrollPosition", "updatedAt") SELECT "id", "novelId", "chapterId", "scrollPosition", "updatedAt" FROM `readingProgress`;--> statement-breakpoint
DROP TABLE `readingProgress`;--> statement-breakpoint
ALTER TABLE `__new_readingProgress` RENAME TO `readingProgress`;