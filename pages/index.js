/** @jsx jsx */
import { jsx, Heading, Box, Flex } from "theme-ui"
import Head from "../components/Head"
import Navbar from "../components/Navbar"
import Todo from "../components/Todo"

export default (props) => (
  <div>
    <Head title="INDEX" />
    <Navbar />
    <Flex>
      <Box>
        <Todo />
      </Box>
    </Flex>
  </div>
)
