import { FC, memo } from 'react'
import { TextProps } from '@chakra-ui/react'
import { FontFamily } from 'src/theme/fonts'
import { Text } from '@chakra-ui/layout'

export interface LogoProps {}

const LOGO_TEXT = [['['], ['we', 'brand'], ['codev'], [']']] satisfies Array<
  [string] | [string, TextProps['color']]
>

export const Logo: FC<LogoProps> = memo(() => (
  <Text textStyle="logo" fontFamily={FontFamily.Logo}>
    {LOGO_TEXT.map(([text, color], index) => (
      <Text key={index} as="span" color={color}>
        {text}
      </Text>
    ))}
  </Text>
))
