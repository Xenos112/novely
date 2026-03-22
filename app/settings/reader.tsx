import { setItem } from 'expo-secure-store'
import { useAtom } from 'jotai'
import { Minus, Plus } from 'lucide-react-native'
import { Pressable, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from '@/components/Themed'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Text } from '@/components/ui/text'
import { useColorScheme } from '@/components/useColorScheme'
import { NAV_THEME } from '@/lib/theme'
import { settingsAtom } from '@/store/settings'

export default function ReaderSettings() {
  const [settings, setSettings] = useAtom(settingsAtom)
  const colorScheme = useColorScheme()
  const iconColor = NAV_THEME[colorScheme].colors.background

  const decrease = () => {
    setItem('fontSize', (settings.fontSize - 1).toString())
    setSettings({ ...settings, fontSize: settings.fontSize - 1 })
  }

  const increase = () => {
    setItem('fontSize', (settings.fontSize + 1).toString())
    setSettings({ ...settings, fontSize: settings.fontSize + 1 })
  }

  const toggleOnPressScroll = () => {
    const newValue = !settings.isOnPressScroll
    setItem('isOnPressScroll', newValue.toString())
    setSettings({ ...settings, isOnPressScroll: newValue })
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1 px-4">
        <Text
          variant="h1"
          className="mt-8 mb-6"
        >
          Reader
        </Text>

        <View className="bg-card rounded-xl overflow-hidden">
          <View className="flex-row items-center gap-4">
            <Pressable
              onPress={decrease}
              disabled={settings.fontSize <= 1}
              className={`w-10 h-10 rounded-full items-center justify-center ${settings.fontSize <= 10 ? 'bg-muted' : 'bg-primary'}`}
            >
              <Minus
                size={18}
                color={iconColor}
              />
            </Pressable>
            <View className="flex-1 flex-row items-center justify-center gap-2">
              <Text className="text-3xl font-bold">{settings.fontSize}</Text>
              <Text className="text-muted-foreground">px</Text>
            </View>
            <Pressable
              onPress={increase}
              className={`w-10 h-10 rounded-full items-center justify-center ${settings.fontSize >= 40 ? 'bg-muted' : 'bg-primary'}`}
            >
              <Plus
                size={18}
                color={iconColor}
              />
            </Pressable>
          </View>
        </View>

        <View className="mt-6">
          <Text
            variant="h4"
            className="mb-3"
          >
            Preview
          </Text>
          <View className="bg-card rounded-xl p-5">
            <Text style={{ fontSize: settings.fontSize, lineHeight: settings.fontSize * 1.6 }}>
              The quick brown fox jumps over the lazy dog. This is a sample text to preview your
              reading experience.
            </Text>
          </View>

          <View className="mt-4">
            <View className="flex-row items-center justify-between bg-card rounded-xl">
              <Label>Scroll using volume buttons</Label>
              <Switch
                checked={settings.isOnPressScroll}
                onCheckedChange={toggleOnPressScroll}
              />
            </View>
          </View>
        </View>

        <View className="h-8" />
      </ScrollView>
    </SafeAreaView>
  )
}
