import { ScrollView } from 'react-native'
import { Text } from '@/components/ui/text'
import { useChapterContext } from '../_providers/ChapterProvider'

export default function Displayer() {
  const chapter = useChapterContext()

  const isRTL = chapter?.content?.language === 'ar'

  return (
    <ScrollView className="flex-1 p-5 pb-10">
      <Text className={`text-2xl font-semibold mb-6 ${isRTL ? 'text-right' : ''}`}>
        {chapter?.content?.title}
      </Text>
      {chapter?.content?.content.split('\n\n').map((paragraph: string, index: number) => (
        <Text
          key={index}
          className={`leading-8 text-lg mb-4 ${isRTL ? 'text-right' : ''}`}
        >
          {paragraph}
        </Text>
      ))}
    </ScrollView>
  )
}
