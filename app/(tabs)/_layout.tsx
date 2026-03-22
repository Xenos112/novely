import { Tabs } from 'expo-router'
import { Home, Settings } from 'lucide-react-native'
import { useColorScheme } from '@/components/useColorScheme'
import { NAV_THEME } from '@/lib/theme'

export default function TabsLayout() {
  const colorScheme = useColorScheme()
  const iconsColor = NAV_THEME[colorScheme].colors.text

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{ tabBarIcon: () => <Home color={iconsColor} /> }}
      />
      <Tabs.Screen
        name="settings"
        options={{ tabBarIcon: () => <Settings color={iconsColor} /> }}
      />
    </Tabs>
  )
}
