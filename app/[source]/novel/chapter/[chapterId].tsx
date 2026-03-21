import { useLocalSearchParams, useNavigation } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import useChapterQuery from '@/hooks/useChapterQuery'
import { parseStringParam } from '@/lib/utils'
import ChapterHeader from './_components/ChapterHeader'
import Displayer from './_components/Displayer'
import ChapterContext from './_providers/ChapterProvider'
import type { Sources } from '@/sources'

export default function Chapter() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
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
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      <SafeAreaView className="flex-1">
        <StatusBar hidden={isMenuOpen} />
        <ChapterHeader title={chapter?.title || 'Loading...'} />
        <Displayer />
      </SafeAreaView>
    </ChapterContext.Provider>
  )
}
