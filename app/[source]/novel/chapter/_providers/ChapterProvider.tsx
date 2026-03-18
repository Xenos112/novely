import { createContext, use } from 'react'
import type { ChapterContent, Sources } from '@/types/source'

type ChapterProviderProps = {
  sourceName: Sources
  chapterId: string
  novelId: string
  content?: ChapterContent
}
const ChapterContext = createContext<ChapterProviderProps | undefined>(undefined)

export const useChapterContext = () => use(ChapterContext)

export default ChapterContext // expo will throw warning if i dont export default
