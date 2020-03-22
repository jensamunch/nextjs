/** @jsx jsx */
import { jsx } from "theme-ui"
import { Button, Text, Flex, Box } from "theme-ui"

function TodoSingle(props) {
  return (
    <Flex>
      <Box p={2} sx={{ flex: "1 1 auto" }}>
        <Text
          sx={{
            color: "text",
            fontSize: 3,
            textDecoration: props.todo.isCompleted ? "line-through" : "",
          }}
        >
          {props.todo.text}
        </Text>
      </Box>
      <Box p={2} bg="muted">
        <Button
          sx={{
            display: "inline-block",
            pr: 3,
          }}
          onClick={() => props.completeTodo(props.index)}
        >
          Complete
        </Button>
      </Box>
      <Box p={2} bg="muted">
        <Button onClick={() => props.deleteTodo(props.index)}>Delete</Button>
      </Box>
    </Flex>
  )
}

export default TodoSingle
