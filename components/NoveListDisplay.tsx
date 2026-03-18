import { Image } from 'expo-image'
import { router } from 'expo-router'
import { memo } from 'react'
import { FlatList, Pressable } from 'react-native'

import { View } from '@/components/Themed'
import { Text } from '@/components/ui/text'

import type { AbstactNovel } from '@/types/source'

const NUM_COLUMNS = 3

function NovelListDisplay({ data }: { data: AbstactNovel[] }) {
  const paddingCount =
    data.length % NUM_COLUMNS === 0 ? 0 : NUM_COLUMNS - (data.length % NUM_COLUMNS)
  const padding = paddingCount > 0 ? Array.from({ length: paddingCount }, () => null) : []
  const paddedData: (AbstactNovel | null)[] = [...data, ...padding]

  return (
    <FlatList
      data={paddedData}
      numColumns={NUM_COLUMNS}
      keyExtractor={(item, index) => (item as AbstactNovel | null)?.id ?? `empty-${index}`}
      renderItem={({ item: novel }: { item: AbstactNovel | null }) => (
        <View className="flex-1 m-1 pt-2">
          {novel && (
            <Pressable onPress={() => router.push(`/${novel.source}/novel/${novel.id}`)}>
              <Image
                contentFit="cover"
                source={novel.cover}
                style={{ width: '100%', aspectRatio: 2 / 3 }}
              />
              <Text
                numberOfLines={2}
                className="mt-1 text-xs"
              >
                {novel.title}
              </Text>
            </Pressable>
          )}
        </View>
      )}
    />
  )
}

export default memo(NovelListDisplay)
