import { View } from "@/components/Themed";
import { Text } from "@/components/ui/text";
import { AbstactNovel } from "@/types/source";
import { Image } from "expo-image";
import { FlatList } from "react-native";

const NUM_COLUMNS = 3;

export default function NovelListDisplay({ data }: { data: AbstactNovel[] }) {
  const paddedData = [
    ...data,
    ...Array(data.length % NUM_COLUMNS === 0 ? 0 : NUM_COLUMNS - (data.length % NUM_COLUMNS)).fill(
      null,
    ),
  ];

  return (
    <FlatList
      data={paddedData}
      numColumns={NUM_COLUMNS}
      keyExtractor={(item, index) => item?.id ?? `empty-${index}`}
      renderItem={({ item: novel }) => (
        <View className="flex-1 m-1 pt-2">
          {novel && (
            <>
              <Image
                contentFit="cover"
                source={novel.cover}
                style={{ width: "100%", aspectRatio: 2 / 3 }}
              />
              <Text numberOfLines={2} className="mt-1 text-xs">
                {novel.title}
              </Text>
            </>
          )}
        </View>
      )}
    />
  );
}
