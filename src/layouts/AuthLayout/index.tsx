import React, { FC, PropsWithChildren } from 'react'
import { HStack, VStack } from '@chakra-ui/layout'
import { Header } from 'src/components/Header'

export interface AuthLayoutProps extends PropsWithChildren {}

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <VStack w="full">
      <Header />
      <HStack>
        {children}
        {/* splash */}
      </HStack>
    </VStack>
  )
}
