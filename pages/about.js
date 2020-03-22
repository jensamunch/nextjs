/** @jsx jsx */
import { jsx, Box, Heading } from "theme-ui"
import Head from "../components/Head"
import Navbar from "../components/Navbar"

export default (props) => (
  <div>
    <Head title="ABOUT" />
    <Navbar />
    <Box
      sx={{
        maxWidth: 500,
        mx: "auto",
        p: 3,
        border: "1px",
        borderColor: "lightpink",
        borderStyle: "solid",
      }}
    >
      <Heading>About</Heading>
    </Box>
  </div>
)
