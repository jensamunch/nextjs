import Link from "next/link"
import { NavLink, Flex, useColorMode, jsx} from "theme-ui"
import MoonIcon from "../icons/moon.svg"
import SunIcon from "../icons/sun.svg"

export default (props) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Flex
      as="nav"
      sx={{
        py: 4, // padding-top & padding-bottom
        mb: 3, // margin-bottom
      }}
    >
      <Link href="/" passHref>
        <NavLink pr={5}>Home</NavLink>
      </Link>
      <Link href="/about" passHref>
        <NavLink pr={5}>About</NavLink>
      </Link>
      <Link href="/another-page" passHref>
        <NavLink pr={5}>Another Page</NavLink>
      </Link>
      <NavLink
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default")
        }}
        sx={{
          mt: -1,
        }}
      >
        {colorMode === "default" ? <img src={MoonIcon} /> : <img src={SunIcon} />}
      </NavLink>
    </Flex>
  )
}
