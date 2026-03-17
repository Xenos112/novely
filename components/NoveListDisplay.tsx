import { View } from "@/components/Themed";
import { Text } from "@/components/ui/text";
import type { AbstactNovel } from "@/types/source";
import { Image } from "expo-image";
import { router } from "expo-router";
import { FlatList, Pressable } from "react-native";
import { memo } from "react";

const NUM_COLUMNS = 3;

function NovelListDisplay({ data }: { data: AbstactNovel[] }) {
	const paddedData = [
		...data,
		...Array(
			data.length % NUM_COLUMNS === 0
				? 0
				: NUM_COLUMNS - (data.length % NUM_COLUMNS)
		).fill(null)
	];

	return (
		<FlatList
			data={paddedData}
			numColumns={NUM_COLUMNS}
			keyExtractor={(item, index) => item?.id ?? `empty-${index}`}
			renderItem={({ item: novel }) => (
				<View className="flex-1 m-1 pt-2">
					{novel && (
						<Pressable
							onPress={() => router.push(`/${novel.source}/novel/${novel.id}`)}
						>
							<Image
								contentFit="cover"
								source={novel.cover}
								style={{ width: "100%", aspectRatio: 2 / 3 }}
							/>
							<Text numberOfLines={2} className="mt-1 text-xs">
								{novel.title}
							</Text>
						</Pressable>
					)}
				</View>
			)}
		/>
	);
}

export default memo(NovelListDisplay);
