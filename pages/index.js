/** @jsx jsx */
import { jsx, Heading, Box, Flex } from "theme-ui"
import Head from "../components/Head"
import Navbar from "../components/Navbar"

class FormatName extends React.Component {
  render() {
    return (
      <div
        sx={{
          p: 2,
        }}
      >
        {formatName(user)}
      </div>
    )
  }
}

function formatName(user) {
  return user.firstName + " " + user.lastName
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
}


export default (props) => (
  <div>
    <Head title="INDEX" />
    <Navbar />
    <Flex>
      <Box
        sx={{
          m: 1,
          p: [1, 2, 2],
          flex: "1 1 auto",
          border: "1px",
          borderColor: "lightpink",
          borderStyle: "solid",
        }}
      >
        <Heading>Home 1st column</Heading>
        <FormatName />
        <div
          sx={{
            px: 3, // padding-left & padding-right
            // paddingX: 3 will also work
            py: 4, // padding-top & padding-bottom
            mb: 3, // margin-bottom
            bg: "red",
          }}
        >
          DIV
        </div>
        <div
          sx={{
            px: 3, // padding-left & padding-right
            // paddingX: 3 will also work
            py: 4, // padding-top & padding-bottom
            mb: 3, // margin-bottom
            bg: "blue",
            m: ["0px", "50px", "50px"],
          }}
        >
          DIV
        </div>
      </Box>
      <Box
        sx={{
          flex: "1 1 auto",
          m: 1,
          p: [1, 2, 2],
          border: "1px",
          borderColor: "lightpink",
          borderStyle: "solid",
        }}
      >
        <Heading>Home 2nd column</Heading>
      </Box>
    </Flex>
  </div>
)
