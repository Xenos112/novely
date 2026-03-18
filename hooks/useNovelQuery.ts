import { useQuery } from '@tanstack/react-query'
import { getSource } from '@/lib/source'
import type { Sources } from '@/sources'
import type { Novel } from '@/types/source'

export default function useNovelQuery(sourceName: Sources, id: string) {
  return useQuery({
    queryKey: ['novel', sourceName, id],
    queryFn: () => getSource(sourceName).fetchNovelInfo(id) as Promise<Novel>,
  })
}
