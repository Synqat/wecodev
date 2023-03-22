import { getColorCssVar } from 'src/utils/theme'
import { ACCESSIBILITY_OUTLINE_COLOR, ACCESSIBILITY_OUTLINE_WIDTH } from "src/constants";

export const shadows = {
  outline: `0 0 0 ${ACCESSIBILITY_OUTLINE_WIDTH}px ${getColorCssVar(ACCESSIBILITY_OUTLINE_COLOR)}`,
} as const
