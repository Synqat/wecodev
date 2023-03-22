import { FC, PropsWithChildren } from 'react'
import { VStack } from '@chakra-ui/layout'
import { Header } from 'src/components/Header'

export interface HomeLayoutProps extends PropsWithChildren {
  fill?: boolean
}

export const HomeLayout: FC<HomeLayoutProps> = ({ children, fill }) => {
  return (
    <VStack w="full" h={fill ? 'full' : 'auto'} spacing={0}>
      <Header />
      {children}
      {/* footer? */}
    </VStack>
  )
}
