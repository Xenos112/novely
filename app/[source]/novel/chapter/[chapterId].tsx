import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useLayoutEffect } from 'react'
import { ScrollView, ActivityIndicator } from 'react-native'
import { View } from '@/components/Themed'
import { Text } from '@/components/ui/text'
import useChapterQuery from '@/hooks/useChapterQuery'
import type { Sources } from '@/sources'

export default function Chapter() {
  const { source, chapterId } = useLocalSearchParams()
  const navigation = useNavigation()
  const { data: chapter, isLoading } = useChapterQuery(
    source as Sources,
    decodeURIComponent(chapterId as string),
  )

  const isRTL = chapter?.language === 'ar'

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: chapter?.title || 'Loading...',
    })
  }, [chapter, navigation])

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <ScrollView className="flex-1 p-5 pb-10">
      <Text className={`text-2xl font-semibold mb-6 ${isRTL ? 'text-right' : ''}`}>
        {chapter?.title}
      </Text>
      {chapter?.content
        .split('\n\n')
        .filter(Boolean)
        .map((paragraph: string, index: number) => (
          <Text
            key={index}
            className={`leading-8 text-lg mb-4 ${isRTL ? 'text-right' : ''}`}
          >
            {paragraph}
          </Text>
        ))}
    </ScrollView>
  )
}
