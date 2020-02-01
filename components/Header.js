import Link from 'next/link';
import {
  NavLink,
  Flex
} from 'theme-ui'
import { useColorMode } from 'theme-ui'
import { jsx } from 'theme-ui'

export default props => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Flex as='nav' 
    sx={{
      px: 3, // padding-left & padding-right
      // paddingX: 3 will also work
      py: 4, // padding-top & padding-bottom
      mb: 3, // margin-bottom
    }}
    >
      <Link href="/" passHref>
        <NavLink p={2}>
          Home
      </NavLink>
      </Link>
      <Link href="/About" passHref>
        <NavLink p={2}>
          About
      </NavLink>
      </Link>
      <NavLink p={2} border={2}
        onClick={e => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}
        sx={{
          variant: 'links.nav.outlined',
        }}
      >
        {colorMode === 'default' ? 'Dark' : 'Light'}
      </NavLink>
    </Flex>
  )
}