import { ThemeOverride } from '@chakra-ui/react'
import { getColorCssVar } from 'src/utils/theme'

export const borders = {
  none: 'none',
  outline: `1px solid ${getColorCssVar('ui.10')}`,
} satisfies ThemeOverride['borders']
