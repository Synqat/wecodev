import { baseTheme, ThemeOverride } from '@chakra-ui/react'
import { config } from 'src/theme/config'
import { colors } from 'src/theme/colors'
import { styles } from 'src/theme/styles'
import { space } from 'src/theme/space'
import { sizes } from 'src/theme/sizes'
import { fonts } from 'src/theme/fonts'
import { textStyles } from 'src/theme/textStyles'
import { borders } from 'src/theme/borders'
import { components } from 'src/theme/components'
import { shadows } from 'src/theme/shadows'
import { layerStyles } from 'src/theme/layerStyles'

export const theme = {
  config,
  colors,
  styles,
  space,
  sizes,
  fonts,
  textStyles,
  borders,
  components,
  shadows,
  layerStyles,
  zIndices: baseTheme.zIndices,
} satisfies ThemeOverride
