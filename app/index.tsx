import { View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import NovelListDisplay from "@/components/NoveListDisplay";
import { usePopularQuery } from "@/hooks/usePopularQuery";
import NovelListSkeleton from "@/components/NovelListSkeleton";

export default function TabOneScreen() {
  const { data: popular, isLoading } = usePopularQuery("arno", 1);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        {isLoading && <NovelListSkeleton />}
        <NovelListDisplay data={popular || []} />
      </View>
    </SafeAreaView>
  );
}
