import {
  HStack,
  StackDivider,
  Box,
  Center,
  VStack,
  Text,
} from '@chakra-ui/layout'
import { NextPage } from 'next'
import { HomeLayout } from 'src/layouts/HomeLayout'
import { Logo } from 'src/components/Logo'
import { Input } from '@chakra-ui/input'
import { Link } from 'src/components/Link'
import { PageHref } from 'src/utils/pages'
import { Button } from '@chakra-ui/button'
import { HeartIcon } from 'src/icons/HeartIcon'

const LoginPage: NextPage = ({}) => {
  return (
    <HStack boxSize="full" spacing={0}>
      <Center h="full" w="half" pos="relative">
        <Box bg="bg" w="module.login.width">
          <VStack
            w="full"
            bg="dark.20"
            border="outline"
            rounded="2px"
            p={4}
            spacing={8}
          >
            <Text as="h3" textStyle="heading-6">
              register
            </Text>
            <VStack as="form" spacing={6} w="full">
              <VStack align="start" w="full">
                <Text
                  as="label"
                  textStyle="overline-medium"
                  htmlFor="email"
                  color="ui.80"
                >
                  EMAIL
                </Text>
                <Input
                  w="full"
                  id="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="none"
                />
              </VStack>
              <VStack align="start" w="full">
                <Text
                  as="label"
                  textStyle="overline-medium"
                  htmlFor="username"
                  color="ui.80"
                >
                  USERNAME
                </Text>
                <Input
                  w="full"
                  id="username"
                  type="username"
                  placeholder="Username"
                  autoComplete="none"
                />
              </VStack>
              <VStack align="start" w="full">
                <Text
                  as="label"
                  textStyle="overline-medium"
                  htmlFor="password"
                  color="ui.80"
                >
                  PASSWORD
                </Text>
                <Input
                  w="full"
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="new-password"
                />
              </VStack>
              <StackDivider w="full" borderBottom="outline" />
              <VStack w="full" px={4}>
                <Button
                  h={10}
                  w="full"
                  size="medium"
                  justifyContent="start"
                  leftIcon={<HeartIcon />}
                >
                  <HStack spacing={1}>
                    <Text as="span" textStyle="overline-small" color="ui.40">
                      sign up with
                    </Text>
                    <Text as="span">GitHub</Text>
                  </HStack>
                </Button>
                <Button
                  h={10}
                  w="full"
                  size="medium"
                  justifyContent="start"
                  leftIcon={<HeartIcon />}
                >
                  <HStack spacing={1}>
                    <Text as="span" textStyle="overline-small" color="ui.40">
                      sign up with
                    </Text>
                    <Text as="span">Discord</Text>
                  </HStack>
                </Button>
              </VStack>
              <StackDivider w="full" borderBottom="outline" />
              <Box w="full" px={4}>
                <Text
                  textStyle="overline-small"
                  color="ui.40"
                  textAlign="center"
                >
                  By signing up you agreeing to our{' '}
                  <Link
                    href={PageHref.TermsOfService}
                    color="brand.80"
                    _hover={{ color: 'brand' }}
                  >
                    terms of service
                  </Link>{' '}
                  and{' '}
                  <Link
                    href={PageHref.PrivacyPolicy}
                    color="brand.80"
                    _hover={{ color: 'brand' }}
                  >
                    privacy policy
                  </Link>
                </Text>
              </Box>
              <Button size="large">sign up</Button>
            </VStack>
          </VStack>
        </Box>
        <Box
          pos="absolute"
          bgImg="/assets/bg-pattern-0.png"
          bgRepeat="repeat"
          inset={0}
          boxSize="full"
          zIndex={-1}
          pointerEvents="none"
          opacity={0.05}
        />
      </Center>
      <Center
        h="full"
        w="half"
        pos="relative"
        bg="rgba(0, 0, 0, 0.8)"
        overflow="hidden"
      >
        <VStack>
          <Logo as="h1" fontSize="48px" />
          <Text as="h2" textStyle="logo" fontSize="32px" color="ui.60">
            <Text as="span" color="brand">
              we
            </Text>{' '}
            help you{' '}
            <Text as="span" color="brand">
              co
            </Text>
            llaboratively{' '}
            <Text as="span" color="brand">
              dev
            </Text>
            elop
          </Text>
        </VStack>
        <Box
          pos="absolute"
          bgImg="/assets/login-bg.jpg"
          bgRepeat="no-repeat"
          bgSize="cover"
          inset={0}
          boxSize="full"
          pointerEvents="none"
          zIndex={-1}
          filter="blur(4px)"
          transform="scale(1.1)"
        />
      </Center>
    </HStack>
  )
}

LoginPage.getLayout = (page, _props) => <HomeLayout fill children={page} />

export default LoginPage
