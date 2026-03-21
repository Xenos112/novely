import { router } from 'expo-router'
import { ArrowLeft } from 'lucide-react-native'
import { Pressable } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { View } from '@/components/Themed'
import { Text } from '@/components/ui/text'
import { useColorScheme } from '@/components/useColorScheme'
import { NAV_THEME } from '@/lib/theme'
import { useChapterContext } from '../_providers/ChapterProvider'

type ChapterHeaderProps = {
  title: string
}

export default function ChapterHeader({ title }: ChapterHeaderProps) {
  const theme = useColorScheme()
  const chapterContext = useChapterContext()
  const { isMenuOpen } = chapterContext!

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(isMenuOpen ? 0 : 1, { duration: 200 }),
    transform: [{ translateY: withTiming(isMenuOpen ? -50 : 0, { duration: 200 }) }],
  }))

  return (
    <View className="relative z-10 bg-background">
      <Animated.View
        style={animatedStyle}
        className="flex-row gap-4 px-4 py-2 w-full absolute top-0 left-0 right-0"
      >
        <Pressable onPress={() => router.back()}>
          <ArrowLeft
            className="text-xl"
            color={NAV_THEME[theme].colors.text}
          />
        </Pressable>
        <Text className="text-xl font-medium">{title}</Text>
      </Animated.View>
    </View>
  )
}
