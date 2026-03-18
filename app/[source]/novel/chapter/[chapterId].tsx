import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useLayoutEffect } from 'react'
import { ScrollView, ActivityIndicator, StyleSheet } from 'react-native'

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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: chapter?.title || 'Loading...',
    })
  }, [chapter, navigation])

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text className="text-2xl font-semibold mb-6">{chapter?.title}</Text>
      <Text className="leading-8 text-lg">{chapter?.content}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
