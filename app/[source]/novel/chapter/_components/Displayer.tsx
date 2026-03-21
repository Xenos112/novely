import { useMemo, useRef, useState } from 'react'
import { type GestureResponderEvent, Pressable, ScrollView } from 'react-native'
import { Text } from '@/components/ui/text'
import { useChapterContext } from '../_providers/ChapterProvider'

export default function Displayer() {
  const chapter = useChapterContext()
  const { isMenuOpen, setIsMenuOpen } = chapter
  const scrollRef = useRef<ScrollView>(null)
  const currentY = useRef(0)
  const [height, setHeight] = useState(0)
  const isRTL = chapter?.content?.language === 'ar'

  const smoothScroll = (targetY: number) => {
    const clamped = Math.max(0, targetY)
    scrollRef.current?.scrollTo({ y: clamped, animated: true })
  }

  const handlePress = (e: GestureResponderEvent) => {
    const y = e.nativeEvent.pageY
    const third = height / 3

    if (y < third) {
      smoothScroll(currentY.current - height * 0.6)
    } else if (y < third * 2) {
      setIsMenuOpen(!isMenuOpen)
    } else {
      smoothScroll(currentY.current + height * 0.6)
    }
  }

  const paragraphs = useMemo(
    () => chapter?.content?.content.split('\n\n') ?? [],
    [chapter?.content?.content],
  )

  return (
    <ScrollView
      ref={scrollRef}
      className="flex-1 p-5 pb-10"
      onLayout={e => setHeight(e.nativeEvent.layout.height)}
      onScroll={e => {
        currentY.current = e.nativeEvent.contentOffset.y
      }}
      scrollEventThrottle={16}
    >
      <Text className={`text-2xl font-semibold mb-6 ${isRTL ? 'text-right' : ''}`}>
        {chapter?.content?.title}
      </Text>
      <Pressable onPress={handlePress}>
        {paragraphs.map((paragraph: string, index: number) => (
          <Text
            key={index}
            className={`leading-8 text-lg mb-4 ${isRTL ? 'text-right font-noto-arabic' : ''}`}
          >
            {paragraph}
          </Text>
        ))}
      </Pressable>
    </ScrollView>
  )
}
