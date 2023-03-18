import { getColorCssVar } from 'src/utils/theme'

export const shadows = {
  outline: `0 0 0 1px ${getColorCssVar('brand')}`,
} as const
