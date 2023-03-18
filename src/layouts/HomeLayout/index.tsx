import { FC, PropsWithChildren } from 'react'
import { VStack } from '@chakra-ui/layout'
import { Header } from 'src/components/Header'

export interface HomeLayoutProps extends PropsWithChildren {}

export const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return (
    <VStack w="full">
      <Header />
      {children}
      {/* footer? */}
    </VStack>
  )
}
