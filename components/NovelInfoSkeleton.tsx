import { View } from "./Themed";
import { Skeleton } from "./ui/skeleton";

export default function NovelInfoSkeleton() {
  return (
    <View className="relative">
      <Skeleton className="absolute inset-0 h-72" />
      <View className="relative px-4">
        <View className="flex-row gap-4">
          <Skeleton className="w-28 h-40 rounded-lg" />
          <View className="flex-1 gap-2">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/3" />
            <View className="flex-row gap-2 mt-2">
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
