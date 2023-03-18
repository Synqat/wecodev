import { FC } from 'react'
import { HStack } from '@chakra-ui/layout'
import { SearchIcon } from 'src/icons/SearchIcon'
import { Input } from '@chakra-ui/input'

export interface SearchProps {}

export const Search: FC<SearchProps> = () => {
  return (
    <HStack spacing={2}>
      <SearchIcon boxSize={6} color="ui.60" />
      <Input w="search.width" placeholder="Search posts, projects, people..." />
    </HStack>
  )
}
