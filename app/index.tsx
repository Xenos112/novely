import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import NovelListDisplay from '@/components/NoveListDisplay'
import NovelListSkeleton from '@/components/NovelListSkeleton'
import { View } from '@/components/Themed'
import { usePopularQuery } from '@/hooks/usePopularQuery'

export default function TabOneScreen() {
  const { data: popular, isLoading } = usePopularQuery('arno', 1)

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        {isLoading && <NovelListSkeleton />}
        <NovelListDisplay data={popular || []} />
      </View>
    </SafeAreaView>
  )
}
