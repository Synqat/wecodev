import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { chakra } from '@chakra-ui/react'

export const Link = chakra<typeof NextLink, NextLinkProps>(NextLink, {
  shouldForwardProp: (prop) => ['href', 'target', 'children'].includes(prop),
})
