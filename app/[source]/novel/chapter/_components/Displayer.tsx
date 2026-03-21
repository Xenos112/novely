import { useRef, useState } from 'react'
import { Pressable, ScrollView } from 'react-native'
import { Text } from '@/components/ui/text'
import { useChapterContext } from '../_providers/ChapterProvider'

export default function Displayer() {
  const chapter = useChapterContext()
  const { isMenuOpen, setIsMenuOpen } = chapter!
  const scrollRef = useRef<ScrollView>(null)
  const currentY = useRef(0)
  const [height, setHeight] = useState(0)
  const isRTL = chapter?.content?.language === 'ar'

  const handlePress = (e: any) => {
    const y = e.nativeEvent.pageY
    const third = height / 3

    if (y < third) {
      scrollRef.current?.scrollTo({ y: currentY.current - 600, animated: true })
    } else if (y < third * 2) {
      setIsMenuOpen(!isMenuOpen)
    } else {
      scrollRef.current?.scrollTo({ y: currentY.current + 600, animated: true })
    }
  }

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
        {chapter?.content?.content.split('\n\n').map((paragraph: string, index: number) => (
          <Text
            key={index}
            className={`leading-8 text-lg mb-4 ${isRTL ? 'text-right' : ''}`}
          >
            {paragraph}
          </Text>
        ))}
      </Pressable>
    </ScrollView>
  )
}
