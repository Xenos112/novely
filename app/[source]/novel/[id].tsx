import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useLayoutEffect } from 'react'
import { FlatList } from 'react-native'
import ChapterItemSkeleton from '@/app/[source]/novel/_components/ChapterItemSkeleton'
import NovelHeader from '@/app/[source]/novel/_components/NovelHeader'
import NovelInfoSkeleton from '@/app/[source]/novel/_components/NovelInfoSkeleton'
import NovelItem from '@/app/[source]/novel/_components/NovelItem'
import { View } from '@/components/Themed'
import { Text } from '@/components/ui/text'
import useChaptersQuery from '@/hooks/useChaptersQuery'
import useNovelQuery from '@/hooks/useNovelQuery'
import type { Sources } from '@/sources'
import type { Chapter } from '@/types/source'

export default function Novel() {
  const { source, id } = useLocalSearchParams()
  const navigation = useNavigation()

  const { data: novel, isLoading } = useNovelQuery(source as Sources, id as string)

  const { data: chapters, isLoading: isLoadingChapters } = useChaptersQuery(
    source as Sources,
    id as string,
  )

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: novel?.title || 'Loading...',
    })
  }, [novel, navigation])

  if (isLoading) {
    return (
      <View className="flex-1 bg-background">
        <NovelInfoSkeleton />
      </View>
    )
  }

  if (!novel) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-muted-foreground">Novel not found</Text>
      </View>
    )
  }

  return (
    <FlatList
      className="flex-1 bg-background"
      data={chapters}
      keyExtractor={item => item.id}
      ListHeaderComponent={
        <NovelHeader
          novel={novel}
          chapterCount={chapters?.length ?? 0}
        />
      }
      renderItem={({ item: chapter }: { item: Chapter; index: number }) => (
        <NovelItem
          chapter={chapter}
          sourceName={source as Sources}
        />
      )}
      ListFooterComponent={isLoadingChapters ? <ChapterItemSkeleton /> : null}
      contentContainerClassName="pb-8"
    />
  )
}
