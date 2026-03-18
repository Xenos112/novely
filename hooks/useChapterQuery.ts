import { useQuery } from '@tanstack/react-query'
import { sources } from '@/sources/plugins'
import type { Sources } from '@/sources'
import type { ChapterContent } from '@/types/source'

export default function useChapterQuery(sourceName: Sources, id: string) {
  return useQuery({
    queryKey: ['chapter', sourceName, id],
    queryFn: async () => {
      const source = new sources[sourceName]()
      return source.fetchChapterContent(id) as unknown as Promise<ChapterContent>
    },
  })
}
