import { ThemeOverride } from '@chakra-ui/react'
import { FontSize, FontWeight } from 'src/theme/fonts'

export const textStyles = {
  display: {
    fontSize: FontSize.Display,
    fontWeight: FontWeight.SemiBold,
    lineHeight: 'auto',
    letterSpacing: '-0.02rem',
  },

  logo: {
    fontSize: '20px',
    fontWeight: FontWeight.SemiBold,
    lineHeight: '120%',
    letterSpacing: '-0.02rem',
  },

  'heading-1': {
    fontSize: FontSize.Heading1,
    fontWeight: FontWeight.Medium,
    lineHeight: 'auto',
    letterSpacing: '-0.02rem',
  },
  'heading-2': {
    fontSize: FontSize.Heading2,
    fontWeight: FontWeight.Medium,
    lineHeight: 'auto',
    letterSpacing: '-0.02rem',
  },
  'heading-3': {
    fontSize: FontSize.Heading3,
    fontWeight: FontWeight.Medium,
    lineHeight: 'auto',
    letterSpacing: '-0.02rem',
  },
  'heading-4': {
    fontSize: FontSize.Heading4,
    fontWeight: FontWeight.Medium,
    lineHeight: 'auto',
    letterSpacing: '-0.02rem',
  },
  'heading-5': {
    fontSize: FontSize.Heading5,
    fontWeight: FontWeight.Medium,
    lineHeight: 'auto',
    letterSpacing: '-0.02rem',
  },
  'heading-6': {
    fontSize: FontSize.Heading6,
    fontWeight: FontWeight.Medium,
    lineHeight: 'auto',
    letterSpacing: '-0.02rem',
  },

  'body-large': {
    fontSize: FontSize.BodyLarge,
    fontWeight: FontWeight.Regular,
    lineHeight: FontSize.BodyLarge,
    letterSpacing: '0rem',
  },
  'body-medium': {
    fontSize: FontSize.BodyMedium,
    fontWeight: FontWeight.Regular,
    lineHeight: FontSize.BodyMedium,
    letterSpacing: '0rem',
  },
  'body-small': {
    fontSize: FontSize.BodySmall,
    fontWeight: FontWeight.Regular,
    lineHeight: FontSize.BodyMedium,
    letterSpacing: '0rem',
  },
  'body-xsmall': {
    fontSize: FontSize.BodyExtraSmall,
    fontWeight: FontWeight.Regular,
    lineHeight: FontSize.BodyExtraSmall,
    letterSpacing: '0rem',
  },

  'label-large': {
    fontSize: FontSize.LabelLarge,
    fontWeight: FontWeight.SemiBold,
    lineHeight: FontSize.LabelLarge,
    letterSpacing: '0.02rem',
  },
  'label-medium': {
    fontSize: FontSize.LabelMedium,
    fontWeight: FontWeight.SemiBold,
    lineHeight: FontSize.LabelMedium,
    letterSpacing: '0.02rem',
  },
  'label-small': {
    fontSize: FontSize.LabelSmall,
    fontWeight: FontWeight.SemiBold,
    lineHeight: FontSize.LabelMedium,
    letterSpacing: '0.02rem',
  },
  'label-xsmall': {
    fontSize: FontSize.LabelExtraSmall,
    fontWeight: FontWeight.SemiBold,
    lineHeight: FontSize.LabelExtraSmall,
    letterSpacing: '0.02rem',
  },

  'overline-large': {
    fontSize: FontSize.OverlineLarge,
    fontWeight: FontWeight.Regular,
    lineHeight: FontSize.OverlineLarge,
    letterSpacing: '0.2rem',
    textTransform: 'uppercase',
  },
  'overline-medium': {
    fontSize: FontSize.OverlineMedium,
    fontWeight: FontWeight.Regular,
    lineHeight: FontSize.OverlineLarge,
    letterSpacing: '0.2rem',
    textTransform: 'uppercase',
  },
  'overline-small': {
    fontSize: FontSize.OverlineSmall,
    fontWeight: FontWeight.Regular,
    lineHeight: '14px',
    letterSpacing: '0.2rem',
    textTransform: 'uppercase',
  },
} satisfies ThemeOverride['textStyles']
