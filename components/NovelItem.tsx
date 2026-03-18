import { router } from 'expo-router'
import { memo } from 'react'
import { Pressable } from 'react-native'
import { View } from '@/components/Themed'
import { Text } from '@/components/ui/text'
import type { Chapter } from '@/types/source'
import type { Sources } from '@/sources'

const NovelItem = memo(({ chapter, sourceName }: { chapter: Chapter; sourceName: Sources }) => (
  <Pressable
    onPress={() => router.push(`/${sourceName}/novel/chapter/${encodeURIComponent(chapter.id)}`)}
    className="flex-row items-center justify-between px-4 py-3 border-b border-border active:bg-accent"
  >
    <View className="flex-1">
      <Text
        className="text-sm font-medium text-foreground"
        numberOfLines={1}
      >
        {chapter.title}
      </Text>
    </View>
    <View className="w-2 h-2 rounded-full bg-primary ml-3" />
  </Pressable>
))

export default NovelItem
