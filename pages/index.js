/** @jsx jsx */
import { jsx, Heading, Box, Flex } from "theme-ui"
import Head from "../components/Head"
import Navbar from "../components/Navbar"
import Todo from "../components/TodoList"

export default (props) => (
  <Box 
  px={[2,5,5]}
  >
    <Head title="Todo App" />
    <Navbar />
    <Todo />
  </Box>
)
