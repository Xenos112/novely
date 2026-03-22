CREATE TABLE `chapterContent` (
	`chapterId` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`language` text NOT NULL,
	FOREIGN KEY (`chapterId`) REFERENCES `chapters`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `chapters` (
	`id` text PRIMARY KEY NOT NULL,
	`novelId` text NOT NULL,
	`title` text NOT NULL,
	`url` text NOT NULL,
	`order` integer NOT NULL,
	FOREIGN KEY (`novelId`) REFERENCES `novels`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `library` (
	`novelId` text PRIMARY KEY NOT NULL,
	FOREIGN KEY (`novelId`) REFERENCES `novels`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `novels` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text,
	`author` text,
	`description` text,
	`genres` text DEFAULT '[]',
	`cover` text,
	`source` text,
	`status` text
);
--> statement-breakpoint
CREATE TABLE `readingProgress` (
	`id` text PRIMARY KEY NOT NULL,
	`novelId` text NOT NULL,
	`chapterId` text NOT NULL,
	`scrollPosition` integer DEFAULT 0 NOT NULL,
	`updatedAt` integer NOT NULL,
	FOREIGN KEY (`novelId`) REFERENCES `novels`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`chapterId`) REFERENCES `chapters`(`id`) ON UPDATE no action ON DELETE no action
);
