import { Box, HStack, VStack } from '@chakra-ui/layout'
import { useAppDispatch, useAppSelector } from 'src/hooks/store.hooks'
import { Button, IconButton } from '@chakra-ui/button'
import { incTest } from 'src/state/slice/global.slice'
import { NextPage } from 'next'
import { HomeLayout } from 'src/layouts/HomeLayout'
import { HeartIcon } from 'src/icons/HeartIcon'
import HomePage from 'src/pages/index'

const TestingPage: NextPage = ({}) => {
  const { test } = useAppSelector((state) => state.global)
  const dispatch = useAppDispatch()
  return (
    <VStack color="accent.blue.100" spacing={8} p={8}>
      <Button bg="ui.10" py={2} px={4} onClick={() => dispatch(incTest())}>
        {test}
      </Button>
      <Box layerStyle="panel">layerStyle = "panel"</Box>

      <HStack align="start" spacing={8}>
        <VStack>
          <Button size="large">Label</Button>
          <Button size="medium">Label</Button>
          <Button size="small">Label</Button>
          <Button size="xsmall">Label</Button>
        </VStack>

        <VStack>
          <IconButton
            aria-label="large"
            size="large.icon"
            icon={<HeartIcon boxSize={5} />}
          />
          <IconButton
            aria-label="medium"
            size="medium.icon"
            icon={<HeartIcon boxSize={4} />}
          />
          <IconButton
            aria-label="small"
            size="small.icon"
            icon={<HeartIcon boxSize={4} />}
          />
          <IconButton
            aria-label="xsmall"
            size="xsmall.icon"
            icon={<HeartIcon boxSize={3} />}
          />
        </VStack>
      </HStack>
    </VStack>
  )
}

TestingPage.getLayout = (page, _props) => <HomeLayout children={page} />

TestingPage.getMeta = (_props) => ({
  title: 'testing',
  description: 'testing',
})

export default TestingPage
