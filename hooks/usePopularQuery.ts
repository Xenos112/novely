import { useQuery } from '@tanstack/react-query'
import { getSource } from '@/lib/source'
import type { Sources } from '@/sources'
import type { AbstactNovel } from '@/types/source'

export function usePopularQuery(sourceName: Sources, page: number) {
  return useQuery({
    queryKey: ['popular', sourceName, page],
    queryFn: () => getSource(sourceName).fetchPopular(page) as Promise<AbstactNovel[]>,
  })
}
