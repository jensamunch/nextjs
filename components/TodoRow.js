/** @jsx jsx */
import { jsx } from "theme-ui"
import { Flex, Button, Text, Box } from "theme-ui"
import { FiCheck, FiTrash } from "react-icons/fi"

function TodoRow({loading, id, title, completed, changeTodo, deleteTodo}) {
    return (
    <Flex>
      <Box p={2}>
        <span
          sx={{
            pr: 2,
          }}
          onClick={() => changeTodo(id)}
        >
          <FiCheck
            sx={{
              position: "relative",
              top: "5px",
            }}
          />
        </span>
        <span onClick={() => deleteTodo(id)}>
          <FiTrash
            sx={{
              position: "relative",
              top: "5px",
            }}
          />
        </span>
      </Box>
      <Box p={2} bg="muted" sx={{ flex: "1 1 auto" }}>
        <Text
          sx={{
            color: "text",
            fontSize: 3,
          }}
        >
          { loading ? "Loading...." : title }
        </Text>
      </Box>
    </Flex>
  )
}

export default TodoRow
