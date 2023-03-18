import { ThemeOverride } from '@chakra-ui/react'
import { FontSize, FontWeight } from 'src/theme/fonts'

export const textStyles = {
  display: {
    fontSize: FontSize.Display,
    fontWeight: FontWeight.SemiBold,
    lineHeight: 'auto',
    letterSpacing: '-2%',
  },

  logo: {
    fontSize: '20px',
    fontWeight: FontWeight.SemiBold,
    lineHeight: '120%',
    letterSpacing: '-2%',
  },

  'heading-1': {
    fontSize: FontSize.Heading1,
    fontWeight: FontWeight.Medium,
    lineHeight: 'auto',
    letterSpacing: '-2%',
  },
  'heading-2': {
    fontSize: FontSize.Heading2,
    fontWeight: FontWeight.Medium,
    lineHeight: 'auto',
    letterSpacing: '-2%',
  },
  'heading-3': {
    fontSize: FontSize.Heading3,
    fontWeight: FontWeight.Medium,
    lineHeight: 'auto',
    letterSpacing: '-2%',
  },
  'heading-4': {
    fontSize: FontSize.Heading4,
    fontWeight: FontWeight.Medium,
    lineHeight: 'auto',
    letterSpacing: '-2%',
  },
  'heading-5': {
    fontSize: FontSize.Heading5,
    fontWeight: FontWeight.Medium,
    lineHeight: 'auto',
    letterSpacing: '-2%',
  },
  'heading-6': {
    fontSize: FontSize.Heading6,
    fontWeight: FontWeight.Medium,
    lineHeight: 'auto',
    letterSpacing: '-2%',
  },

  'body-large': {
    fontSize: FontSize.BodyLarge,
    fontWeight: FontWeight.Regular,
    lineHeight: FontSize.BodyLarge,
    letterSpacing: '0%',
  },
  'body-medium': {
    fontSize: FontSize.BodyMedium,
    fontWeight: FontWeight.Regular,
    lineHeight: FontSize.BodyMedium,
    letterSpacing: '0%',
  },
  'body-small': {
    fontSize: FontSize.BodySmall,
    fontWeight: FontWeight.Regular,
    lineHeight: FontSize.BodyMedium,
    letterSpacing: '0%',
  },
  'body-xsmall': {
    fontSize: FontSize.BodyExtraSmall,
    fontWeight: FontWeight.Regular,
    lineHeight: FontSize.BodyExtraSmall,
    letterSpacing: '0%',
  },

  'label-large': {
    fontSize: FontSize.LabelLarge,
    fontWeight: FontWeight.SemiBold,
    lineHeight: FontSize.LabelLarge,
    letterSpacing: '2%',
  },
  'label-medium': {
    fontSize: FontSize.LabelMedium,
    fontWeight: FontWeight.SemiBold,
    lineHeight: FontSize.LabelMedium,
    letterSpacing: '2%',
  },
  'label-small': {
    fontSize: FontSize.LabelSmall,
    fontWeight: FontWeight.SemiBold,
    lineHeight: FontSize.LabelMedium,
    letterSpacing: '2%',
  },
  'label-xsmall': {
    fontSize: FontSize.LabelExtraSmall,
    fontWeight: FontWeight.SemiBold,
    lineHeight: FontSize.LabelExtraSmall,
    letterSpacing: '2%',
  },

  'overline-large': {
    fontSize: FontSize.OverlineLarge,
    fontWeight: FontWeight.Regular,
    lineHeight: FontSize.OverlineLarge,
    letterSpacing: '20%',
  },
  'overline-medium': {
    fontSize: FontSize.OverlineMedium,
    fontWeight: FontWeight.Regular,
    lineHeight: FontSize.OverlineLarge,
    letterSpacing: '20%',
  },
  'overline-small': {
    fontSize: FontSize.OverlineSmall,
    fontWeight: FontWeight.Regular,
    lineHeight: 'auto',
    letterSpacing: '20%',
  },
} satisfies ThemeOverride['textStyles']
