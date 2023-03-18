import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system'
import { inputAnatomy as parts } from '@chakra-ui/anatomy'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  field: defineStyle({
    w: 'full',
    minWidth: 0,
    outline: 0,
    rounded: '4px',
    appearance: 'none',
    _hover: { bg: 'dark.60', color: 'ui.80' },
    _active: { bg: 'ui.20', color: 'ui.100' },
    _focus: {
      boxShadow: 'outline',
      bg: 'dark.40',
      color: 'ui.80',
    },
    _placeholder: {
      fontStyle: 'italic',
    },
  }),
})

const linkVariant = definePartsStyle({
  field: {
    color: 'ui.40',
    _hover: { ...baseStyle.field._hover, color: 'ui.60' },
    _active: { ...baseStyle.field._active, color: 'ui.100' },
  },
})

const solidVariant = definePartsStyle({
  field: {
    bg: 'dark.40',
    color: 'ui.60',
    border: 'outline',
  },
})

const outlineVariant = definePartsStyle({
  field: {
    border: 'outline',
  },
})

const variants = {
  link: linkVariant,
  solid: solidVariant,
  outline: outlineVariant,
}

const largeSize = definePartsStyle({
  field: {
    py: 2,
    px: 3,
    textStyle: 'body-large',
  },
})

const mediumSize = definePartsStyle({
  field: {
    py: 2,
    px: 3,
    textStyle: 'body-medium',
  },
})

const smallSize = definePartsStyle({
  field: {
    py: 1,
    px: 2,
    textStyle: 'body-small',
  },
})

const xsmallSize = definePartsStyle({
  field: {
    py: 1,
    px: 2,
    textStyle: 'body-xsmall',
  },
})

const sizes = {
  large: largeSize,
  medium: mediumSize,
  small: smallSize,
  xsmall: xsmallSize,
}

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'solid',
    size: 'medium',
  },
})
