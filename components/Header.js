import Link from 'next/link';
import {
  Flex,
  Text,
  Box,
} from 'rebass/styled-components'

const Header = () => (
  <Flex
    px={2}
    color='white'
    bg='black'
    alignItems='center'>
    <Text p={2} fontWeight='bold'>Rebass</Text>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </Flex>
);

export default Header;

