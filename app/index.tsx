import { View } from "@/components/Themed";
import { Text } from "@/components/ui/text";
import { useEffect, useState } from "react";
import { sources } from "@/sources/plugins";
import { Button } from "@/components/ui/button";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView>
      <ScrollView>
        <View className="flex-1 align-center justify-center">
          <Button>
            <Text>Click me</Text>
          </Button>
          <Text>{JSON.stringify(page)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
