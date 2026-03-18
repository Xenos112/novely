import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useLayoutEffect } from 'react'
import useChapterQuery from '@/hooks/useChapterQuery'
import Displayer from './_components/Displayer'
import { ChapterContext } from './_providers/ChapterProvider'
import type { Sources } from '@/sources'

export default function Chapter() {
  const { source, chapterId } = useLocalSearchParams()
  const navigation = useNavigation()
  const { data: chapter } = useChapterQuery(
    source as Sources,
    decodeURIComponent(chapterId as string),
  )

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: chapter?.title || 'Loading...',
    })
  }, [chapter, navigation])

  return (
    <ChapterContext.Provider value={chapter}>
      <Displayer />
    </ChapterContext.Provider>
  )
}
