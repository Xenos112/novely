import { useQuery } from '@tanstack/react-query'
import { sources } from '@/sources/plugins'
import type { Sources } from '@/sources'
import type { Novel } from '@/types/source'

export default function useNovelQuery(sourceName: Sources, id: string) {
  return useQuery({
    queryKey: ['novel', sourceName, id],
    queryFn: async () => {
      const source = new sources[sourceName]()
      return source.fetchNovelInfo(id) as unknown as Novel
    },
  })
}
