import { createContext, type Dispatch, type SetStateAction, use } from 'react'
import type { ChapterContent, Sources } from '@/types/source'

type ChapterProviderProps = {
  sourceName: Sources
  chapterId: string
  novelId: string
  content?: ChapterContent
  isMenuOpen: boolean
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

const ChapterContext = createContext<ChapterProviderProps | undefined>(undefined)

export const useChapterContext = () => use(ChapterContext)

export default ChapterContext
