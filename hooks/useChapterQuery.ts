import { useQuery } from '@tanstack/react-query'
import { getSource } from '@/lib/source'
import type { Sources } from '@/sources'
import type { ChapterContent } from '@/types/source'

export default function useChapterQuery(sourceName: Sources, id: string) {
  return useQuery({
    queryKey: ['chapter', sourceName, id],
    queryFn: () => getSource(sourceName).fetchChapterContent(id) as Promise<ChapterContent>,
  })
}
