import { ThemeOverride } from '@chakra-ui/react'
import { FontFamily } from 'src/theme/fonts'

export const styles = {
  global: {
    body: {
      bg: 'bg',
      color: 'ui.100',
      fontFamily: FontFamily.Body,
      h: 'full',
      minH: 'full',
    },
    '#__next': {
      h: 'full',
      minH: 'full',
    },
    html: {
      h: 'full',
      minH: 'full',
    },
    '*, *::before, *::after': {
      accentColor: 'accessible',
    },
  },
} satisfies ThemeOverride['styles']
