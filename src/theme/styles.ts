import { ThemeOverride } from '@chakra-ui/react'
import { FontFamily } from 'src/theme/fonts'

export const styles = {
  global: {
    body: {
      bg: 'bg',
      color: 'ui.100',
      fontFamily: FontFamily.Body,
    },
  },
} satisfies ThemeOverride['styles']
