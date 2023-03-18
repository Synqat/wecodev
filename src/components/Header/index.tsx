import { FC } from 'react'
import { Center, HStack, Text } from '@chakra-ui/layout'
import { Logo } from 'src/components/Logo'
import { Button } from '@chakra-ui/button'
import { PageHref } from 'src/utils/pages'
import { Link } from 'src/components/Link'

export interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <Center h="header.height" w="full" layerStyle="header">
      <HStack boxSize="full" maxW="content.max" justify="space-between">
        <HStack spacing={8}>
          <Link href={PageHref.Home}>
            <Logo />
          </Link>
          <HStack spacing={2}>
            {/* TODO: remove me */}
            <Button as={Link} href="/testing" variant="link" size="small">
              [testing]
            </Button>
            <Button
              as={Link}
              href={PageHref.Create}
              variant="link"
              size="small"
            >
              create
            </Button>
          </HStack>
        </HStack>
        <HStack spacing={6}>
          <HStack spacing={2}>
            <Button
              as={Link}
              href={PageHref.Projects}
              variant="link"
              size="small"
            >
              projects
            </Button>
            <Button
              as={Link}
              href={PageHref.People}
              variant="link"
              size="small"
            >
              people
            </Button>
          </HStack>
          <Button as={Link} href={PageHref.Login} variant="link" size="small">
            <Text color="brand">login</Text>
          </Button>
        </HStack>
      </HStack>
    </Center>
  )
}
