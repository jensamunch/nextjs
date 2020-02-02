/** @jsx jsx */
import { jsx, Box, Heading } from 'theme-ui'

export default props => (
  <Box
    sx={{
      maxWidth: 500,
      mx: 'auto',
      p: 3,
      border: '1px',
      borderColor: 'lightpink',
      borderStyle: 'solid',
    }}>
    <Heading>About</Heading>
  </Box>
)