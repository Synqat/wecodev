import { ThemeOverride } from '@chakra-ui/react'

export const layerStyles = {
  panel: {
    p: 3,
    w: 'full',
    bg: 'dark.20',
    border: 'outline',
    rounded: '2px',
  },
  header: {
    bg: 'dark.20',
    borderBottom: 'outline',
  },
} satisfies ThemeOverride['layerStyles']
