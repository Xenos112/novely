import { View } from '@/components/Themed'
import { Skeleton } from '@/components/ui/skeleton'
import { APP } from '@/constants/config'

export default function ChapterItemSkeleton() {
  return (
    <View>
      {Array.from({ length: APP.CHAPTER_SKELETON_COUNT })
        .fill(0)
        .map((_, i) => (
          <View
            key={`chapter-skeleton-${i}`}
            className="flex-row items-center justify-between p-3 border-b border-border"
          >
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-3 w-16" />
          </View>
        ))}
    </View>
  )
}
