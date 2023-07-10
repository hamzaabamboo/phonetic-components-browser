import { Kanji } from '@/types'
import { Text, chakra } from '@chakra-ui/react'

export function KanjiDisplay (props: {
  data: Partial<Kanji>
  hideFurigana?: boolean
  isSmall?: boolean
}) {
  const { data, isSmall = false, hideFurigana = false } = props
  const { kanji, reading } = data

  const fontSize = isSmall ? 'lg' : '3xl'
  const fontWeight = isSmall ? 'normal' : 'bold'

  return (
    <chakra.ruby fontSize={fontSize} textAlign="center" fontFamily="Meiryou">
      <Text as="span" fontWeight={fontWeight}>
        {kanji?.replace(/[\(\［](.*?)[\］\)]/g, "").split("・")[0]}
      </Text>
      {!hideFurigana && (
        <chakra.rt>{reading}</chakra.rt>
        )}
    </chakra.ruby>
  )
}
