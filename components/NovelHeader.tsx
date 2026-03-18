import { Image } from 'expo-image'
import { useState } from 'react'
import { Pressable } from 'react-native'
import { View } from '@/components/Themed'
import { Text } from '@/components/ui/text'
import type { Novel } from '@/types/source'
import { APP } from '@/constants/config'

type NovelHeaderProps = {
  novel: Novel
  chapterCount?: number
}

function formatDescription(description: string) {
  return description.replace(/<br>/g, '\n')
}

export default function NovelHeader({ novel, chapterCount = 0 }: NovelHeaderProps) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)

  const formattedDescription = formatDescription(novel.description)
  const shouldTruncate = formattedDescription.length > APP.MAX_DESCRIPTION_LENGTH
  const displayDescription =
    shouldTruncate && !isDescriptionExpanded
      ? formattedDescription.slice(0, APP.MAX_DESCRIPTION_LENGTH) + '...'
      : formattedDescription

  return (
    <View>
      <View className="relative">
        <View className="absolute inset-0 h-2">
          <Image
            source={novel.cover}
            contentFit="cover"
            style={{ width: '100%', height: '100%' }}
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

            <View className="flex-1 justify-end">
              <Text
                className="text-lg font-bold text-foreground leading-tight"
                numberOfLines={2}
              >
                {novel.title}
              </Text>

              {novel.author && (
                <Text className="text-sm text-muted-foreground mt-1">{novel.author}</Text>
              )}

              {novel.status && (
                <View className="mt-2">
                  <Text className="text-xs text-muted-foreground">الحالة</Text>
                  <Text className="text-sm font-medium text-primary">{novel.status}</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>

      {novel.genres && novel.genres.length > 0 && (
        <View className="px-4 pt-4">
          <View className="flex-row flex-wrap gap-2">
            {novel.genres.map((genre: string) => (
              <View
                key={genre}
                className="px-3 py-1.5 bg-secondary rounded-full"
              >
                <Text className="text-xs font-medium text-secondary-foreground">{genre}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {novel.description && (
        <View className="px-4 pt-4 pb-2">
          <Text className="text-sm font-semibold text-foreground mb-2">القصة</Text>
          <Pressable onPress={() => setIsDescriptionExpanded(!isDescriptionExpanded)}>
            <Text className="text-sm text-muted-foreground leading-relaxed">
              {displayDescription}
              {shouldTruncate && (
                <Text className="text-primary font-medium">
                  {isDescriptionExpanded ? ' أقل' : '... المزيد'}
                </Text>
              )}
            </Text>
          </Pressable>
        </View>
      )}

      <View className="px-4 pt-4 pb-2 flex-row items-center justify-between">
        <Text className="text-base font-bold text-foreground">الفصول</Text>
        <Text className="text-sm text-muted-foreground">{chapterCount} فصل</Text>
      </View>
    </View>
  )
}
