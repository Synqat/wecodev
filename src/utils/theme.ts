import { config } from 'src/theme/config'
import { TextProps } from '@chakra-ui/react'

export const getCssVar = (key: string) =>
  `var(--${config.cssVarPrefix}-${key.replace(/\.+/g, '-')})`

export const getColorCssVar = (key: TextProps['color']) =>
  getCssVar(`colors.${key}`)
