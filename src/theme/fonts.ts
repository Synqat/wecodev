import { ThemeOverride } from '@chakra-ui/react'

const shouldProcessFonts = process.env.NO_FONTS !== 'true'

export const rubik = shouldProcessFonts
  ? require('src/theme/fonts.source').rubik
  : {
      style: {
        fontFamily: '"Rubik", sans-serif',
      },
    }

export const sourceCodePro = shouldProcessFonts
  ? require('src/theme/fonts.source').sourceCodePro
  : {
      style: {
        fontFamily: '"Source Code Pro", monospace',
      },
    }

export enum FontWeight {
  Regular = '400',
  Medium = '500',
  SemiBold = '600',
}

export enum FontSize {
  Display = '96px',

  Heading1 = '64px',
  Heading2 = '48px',
  Heading3 = '40px',
  Heading4 = '36px',
  Heading5 = '32px',
  Heading6 = '24px',

  BodyLarge = '20px',
  BodyMedium = '16px',
  BodySmall = '14px',
  BodyExtraSmall = '12px',

  LabelLarge = '20px',
  LabelMedium = '16px',
  LabelSmall = '14px',
  LabelExtraSmall = '12px',

  OverlineLarge = '16px',
  OverlineMedium = '14px',
  OverlineSmall = '12px',
}

export enum FontFamily {
  Logo = 'logo',
  Body = 'body',
  Heading = 'heading',
  Mono = 'mono',
}

export const fonts = {
  [FontFamily.Logo]: rubik.style.fontFamily,
  [FontFamily.Body]: rubik.style.fontFamily,
  [FontFamily.Heading]: rubik.style.fontFamily,
  [FontFamily.Mono]: sourceCodePro.style.fontFamily,
} satisfies ThemeOverride['fonts']
