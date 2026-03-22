import { type Href, router } from 'expo-router'
import { BookOpenCheck, SunMoon } from 'lucide-react-native'
import { FlatList, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from '@/components/Themed'
import { Separator } from '@/components/ui/separator'
import { Text } from '@/components/ui/text'
import { useColorScheme } from '@/components/useColorScheme'
import { NAV_THEME } from '@/lib/theme'

const settingsPages = [
  {
    name: 'Appearance',
    icon: SunMoon,
    path: '/settings/appearance',
  },
  {
    name: 'Reader',
    icon: BookOpenCheck,
    path: '/settings/reader',
  },
]

export default function Settings() {
  const colorScheme = useColorScheme()
  const iconsColor = NAV_THEME[colorScheme].colors.text

  return (
    <SafeAreaView className="flex-1 px-4 bg-background">
      <Text
        variant={'h1'}
        className="mt-8 mb-6"
      >
        Settings
      </Text>
      <FlatList
        data={settingsPages}
        ItemSeparatorComponent={() => <View className="h-4" />}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(item.path as Href)}>
            <View className="bg-card rounded-lg p-4 flex-row items-center gap-4">
              <item.icon
                size={22}
                color={iconsColor}
              />
              <Text
                variant={'h4'}
                className="flex-1"
              >
                {item.name}
              </Text>
            </View>
            <Separator />
          </Pressable>
        )}
      />
    </SafeAreaView>
  )
}
