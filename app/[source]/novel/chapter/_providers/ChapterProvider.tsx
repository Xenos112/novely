import { createContext, use } from 'react'
import type { ChapterContent } from '@/types/source'

export const ChapterContext = createContext<ChapterContent | undefined>(undefined)

export const useChapterContext = () => use(ChapterContext)
