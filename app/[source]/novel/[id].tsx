import { View } from "@/components/Themed";
import { Text } from "@/components/ui/text";
import { Image } from "expo-image";
import { Skeleton } from "@/components/ui/skeleton";
import useChaptersQuery from "@/hooks/useChaptersQuery";
import useNovelQuery from "@/hooks/useNovelQuery";
import type { Sources } from "@/sources";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { FlatList, Pressable } from "react-native";
import type { Chapter } from "@/types/source";
import NovelInfoSkeleton from "@/components/NovelInfoSkeleton";
import { memo, useLayoutEffect, useState } from "react";

const MAX_DESCRIPTION_LENGTH = 300;

function formatDescription(description: string) {
	return description.replace(/<br>/g, "\n");
}

const NovelItem = memo(({ chapter }: { chapter: Chapter }) => (
	<Pressable className="flex-row items-center justify-between px-4 py-3 border-b border-border active:bg-accent">
		<View className="flex-1">
			<Text className="text-sm font-medium text-foreground" numberOfLines={1}>
				{chapter.title}
			</Text>
		</View>
		<View className="w-2 h-2 rounded-full bg-primary ml-3" />
	</Pressable>
));

function ChapterItemSkeleton() {
	return (
		<View className="flex-row items-center justify-between p-3 border-b border-border">
			<Skeleton className="h-4 w-2/3" />
			<Skeleton className="h-3 w-16" />
		</View>
	);
}

export default function Novel() {
	const { source, id } = useLocalSearchParams();
	const navigation = useNavigation();

	const { data: novel, isLoading } = useNovelQuery(
		source as Sources,
		id as string
	);

	const { data: chapters, isLoading: isLoadingChapters } = useChaptersQuery(
		source as Sources,
		id as string
	);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: novel?.title || "Loading..."
		});
	}, [novel]);

	const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

	const formattedDescription = novel?.description
		? formatDescription(novel.description)
		: "";
	const shouldTruncate = formattedDescription.length > MAX_DESCRIPTION_LENGTH;
	const displayDescription =
		shouldTruncate && !isDescriptionExpanded
			? formattedDescription.slice(0, MAX_DESCRIPTION_LENGTH) + "..."
			: formattedDescription;

	if (isLoading) {
		return (
			<View className="flex-1 bg-background">
				<NovelInfoSkeleton />
				<View className="p-4 gap-3">
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-2/3" />
				</View>
			</View>
		);
	}

	if (!novel) {
		return (
			<View className="flex-1 items-center justify-center">
				<Text className="text-muted-foreground">Novel not found</Text>
			</View>
		);
	}

	return (
		<FlatList
			className="flex-1 bg-background"
			data={chapters}
			keyExtractor={(item) => item.id}
			ListHeaderComponent={
				<View>
					<View className="relative">
						<View className="absolute inset-0 h-2">
							<Image
								source={novel.cover}
								contentFit="cover"
								style={{ width: "100%", height: "100%" }}
								transition={300}
							/>
						</View>

						<View className="relative px-4 pb-4">
							<View className="flex-row gap-4">
								<View className="shrink-0">
									<Image
										source={novel.cover}
										contentFit="cover"
										style={{ width: 100, aspectRatio: 2 / 3 }}
										transition={300}
									/>
								</View>

								{/* Details */}
								<View className="flex-1 justify-end">
									<Text
										className="text-lg font-bold text-foreground leading-tight"
										numberOfLines={2}
									>
										{novel.title}
									</Text>

									{novel.author && (
										<Text className="text-sm text-muted-foreground mt-1">
											{novel.author}
										</Text>
									)}

									{novel.status && (
										<View className="mt-2">
											<Text className="text-xs text-muted-foreground">
												الحالة
											</Text>
											<Text className="text-sm font-medium text-primary">
												{novel.status}
											</Text>
										</View>
									)}
								</View>
							</View>
						</View>
					</View>

					{/* Genres */}
					{novel.genres && novel.genres.length > 0 && (
						<View className="px-4 pt-4">
							<View className="flex-row flex-wrap gap-2">
								{novel.genres.map((genre: string, index: number) => (
									<View
										key={index}
										className="px-3 py-1.5 bg-secondary rounded-full"
									>
										<Text className="text-xs font-medium text-secondary-foreground">
											{genre}
										</Text>
									</View>
								))}
							</View>
						</View>
					)}

					{/* Description */}
					{novel.description && (
						<View className="px-4 pt-4 pb-2">
							<Text className="text-sm font-semibold text-foreground mb-2">
								القصة
							</Text>
							<Pressable
								onPress={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
							>
								<Text className="text-sm text-muted-foreground leading-relaxed">
									{displayDescription}
									{shouldTruncate && (
										<Text className="text-primary font-medium">
											{isDescriptionExpanded ? " أقل" : "... المزيد"}
										</Text>
									)}
								</Text>
							</Pressable>
						</View>
					)}

					{/* Chapters Header */}
					<View className="px-4 pt-4 pb-2 flex-row items-center justify-between">
						<Text className="text-base font-bold text-foreground">الفصول</Text>
						<Text className="text-sm text-muted-foreground">
							{chapters?.length || 0} فصل
						</Text>
					</View>
				</View>
			}
			renderItem={({ item: chapter }: { item: Chapter; index: number }) => (
				<NovelItem chapter={chapter} />
			)}
			ListFooterComponent={
				isLoadingChapters ? (
					<View>
						{Array(10)
							.fill(0)
							.map((_, i) => (
								<ChapterItemSkeleton key={i} />
							))}
					</View>
				) : null
			}
			contentContainerClassName="pb-8"
		/>
	);
}
