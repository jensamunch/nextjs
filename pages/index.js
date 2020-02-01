/** @jsx jsx */
import {
  jsx,
  Heading,
  Box,
  Flex
} from 'theme-ui'

export default props => (
  <Flex>
    <Box p={2} bg='muted' sx={{ flex: '1 1 auto' }}>
      <Heading>Home 1st column</Heading>
    </Box>
    <Box p={2} bg='muted' sx={{ flex: '1 1 auto' }}>
      <Heading>Home 2nd column</Heading>

    </Box>
  </Flex>
)