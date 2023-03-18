import { Box, Center, HStack, Text, VStack } from '@chakra-ui/layout'
import { NextPage } from 'next'
import { HomeLayout } from 'src/layouts/HomeLayout'
import { Search } from 'src/components/Search'

const HomePage: NextPage = ({}) => {
  return (
    <Center w="full">
      <VStack align="start" py={4} spacing={4} w="full" maxW="content.max">
        <Search />
        <Text>language selection</Text>
        <Text>tabs</Text>
        <HStack align="start" w="full" spacing={4}>
          <VStack align="start" w="full" spacing={4}>
            <Box layerStyle="panel">content - card</Box>
            <Box layerStyle="panel">content - card</Box>
            <Box layerStyle="panel">content - card</Box>
            <Box layerStyle="panel">content - card</Box>
          </VStack>
          <VStack align="start" flexShrink={0} w="aside.width" spacing={4}>
            <Box layerStyle="panel">content - widget</Box>
            <Box layerStyle="panel">content - widget</Box>
            <Box layerStyle="panel">content - widget</Box>
            <Box layerStyle="panel">content - widget</Box>
          </VStack>
        </HStack>
      </VStack>
    </Center>
  )
}

HomePage.getLayout = (page, _props) => <HomeLayout children={page} />

export default HomePage
