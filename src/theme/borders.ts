import { ThemeOverride } from '@chakra-ui/react'
import { getColorCssVar } from 'src/utils/theme'
import {
  ACCESSIBILITY_OUTLINE_COLOR,
  ACCESSIBILITY_OUTLINE_WIDTH,
} from 'src/constants'

export const borders = {
  none: 'none',
  outline: `1px solid ${getColorCssVar('ui.10')}`,
  accessible: `${ACCESSIBILITY_OUTLINE_WIDTH}px solid ${getColorCssVar(
    ACCESSIBILITY_OUTLINE_COLOR,
  )}`,
} satisfies ThemeOverride['borders']
