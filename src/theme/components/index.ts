import { buttonTheme } from 'src/theme/components/button.theme'
import { inputTheme } from 'src/theme/components/input.theme'
import { ThemeOverride } from '@chakra-ui/react'

export const components = {
  Button: buttonTheme,
  Input: inputTheme,
} satisfies ThemeOverride['components']
