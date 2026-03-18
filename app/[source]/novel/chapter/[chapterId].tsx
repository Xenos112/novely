import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useLayoutEffect } from 'react'
import { parseStringParam } from '@/lib/utils'
import useChapterQuery from '@/hooks/useChapterQuery'
import Displayer from './_components/Displayer'
import ChapterContext from './_providers/ChapterProvider'
import type { Sources } from '@/sources'

export default function Chapter() {
  const { source, chapterId, id } = useLocalSearchParams()
  const sourceName = parseStringParam(source) as Sources
  const chapterIdParam = parseStringParam(chapterId)
  const novelId = parseStringParam(id)
  const navigation = useNavigation()
  const { data: chapter } = useChapterQuery(sourceName, chapterIdParam)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: chapter?.title || 'Loading...',
    })
  }, [chapter, navigation])

  return (
    <ChapterContext.Provider
      value={{
        sourceName,
        chapterId: chapterIdParam,
        novelId,
        content: chapter || undefined,
      }}
    >
      <Displayer />
    </ChapterContext.Provider>
  )
}
