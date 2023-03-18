import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'

const baseStyle = defineStyle({
  rounded: '2px',
  _hover: { bg: 'ui.10', color: 'ui.80' },
  _active: { bg: 'ui.20', color: 'ui.100' },
  _focus: {
    boxShadow: 'outline',
    bg: 'ui.10',
    color: 'ui.80',
  },
})

const linkVariant = defineStyle({
  color: 'ui.40',
  _hover: { ...baseStyle._hover, color: 'ui.60' },
  _active: { ...baseStyle._active, color: 'ui.100' },
})

const solidVariant = defineStyle({
  bg: 'ui.5',
  color: 'ui.60',
  border: 'outline',
})

const outlineVariant = defineStyle({
  border: 'outline',
})

const variants = {
  link: linkVariant,
  solid: solidVariant,
  outline: outlineVariant,
}

const largeSize = defineStyle({
  py: 2,
  px: 3,
  textStyle: 'label-large',
  h: 'button.large',
})

const mediumSize = defineStyle({
  py: 2,
  px: 3,
  textStyle: 'label-medium',
  h: 'button.medium',
})

const smallSize = defineStyle({
  py: 1,
  px: 2,
  textStyle: 'label-small',
  h: 'button.small',
})

const xsmallSize = defineStyle({
  py: 1,
  px: 2,
  textStyle: 'label-xsmall',
  h: 'button.xsmall',
})

const sizes = {
  large: largeSize,
  'large.icon': defineStyle({ ...largeSize, boxSize: 'button.large' }),
  medium: mediumSize,
  'medium.icon': defineStyle({ ...mediumSize, boxSize: 'button.medium' }),
  small: smallSize,
  'small.icon': defineStyle({ ...smallSize, boxSize: 'button.small' }),
  xsmall: xsmallSize,
  'xsmall.icon': defineStyle({ ...xsmallSize, boxSize: 'button.xsmall' }),
}

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'solid',
    size: 'medium',
  },
})
