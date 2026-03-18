import { useQuery } from '@tanstack/react-query'
import { getSource } from '@/lib/source'
import type { Sources } from '@/sources'
import type { Chapter } from '@/types/source'

export default function useChaptersQuery(sourceName: Sources, id: string) {
  return useQuery({
    queryKey: ['chapters', sourceName, id],
    queryFn: () => getSource(sourceName).fetchChapters(id) as Promise<Chapter[]>,
  })
}
