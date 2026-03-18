import { FlatList } from 'react-native'

import { View } from '@/components/Themed'
import { Skeleton } from '@/components/ui/skeleton'

const NUM_COLUMNS = 3
const ITEM_COUNT = 12

export default function NovelListSkeleton() {
  const paddedData = Array.from({ length: ITEM_COUNT }).fill(null)

  return (
    <FlatList
      data={paddedData}
      numColumns={NUM_COLUMNS}
      keyExtractor={(_, index) => `skeleton-${index}`}
      renderItem={() => (
        <View className="flex-1 m-1 pt-2">
          <Skeleton style={{ width: '100%', aspectRatio: 2 / 3 }} />
          <Skeleton className="mt-2 h-3 w-full" />
        </View>
      )}
    />
  )
}
