import { useQuery } from '@tanstack/react-query'
import { sources } from '@/sources/plugins'
import type { Sources } from '@/sources'
import type { Chapter } from '@/types/source'

export default function useChaptersQuery(sourceName: Sources, id: string) {
  return useQuery({
    queryKey: ['chapters', sourceName, id],
    queryFn: async () => {
      const source = new sources[sourceName]()
      return source.fetchChapters(id) as Promise<Chapter[]>
    },
  })
}
