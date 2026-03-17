import { Text, View } from "@/components/Themed";
import { useEffect, useState } from "react";
import { sources } from "@/sources/plugins";

export default function TabOneScreen() {
  const [page, setPage] = useState<any>("");

  useEffect(() => {
    (async () => {
      const ar = new sources["arno"]();
      const title = await ar.fetchPopular(1);
      setPage(title);
    })();
  });
  return (
    <View className="flex-1 align-center justify-center">
      <Text className="">{JSON.stringify(page)}</Text>
    </View>
  );
}
