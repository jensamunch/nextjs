/** @jsx jsx */
import { jsx } from "theme-ui"
import { Grid, Button, Text, Flex, Box } from "theme-ui"
import { FiCheck, FiTrash } from "react-icons/fi"

function TodoSingle(props) {
  return (
    <Grid gap={2} columns={[1, "80px auto"]}>
      <Box>
        <span
          sx={{
            pr: 3,
          }}
          onClick={() => props.changeTodo(props.index)}
        >
          <FiCheck
            sx={{
              position: "relative",
              top: "5px",
            }}
          />
        </span>
        <span
          sx={{
            pr: 3,
          }}
          onClick={() => props.deleteTodo(props.index)}
        >
          <FiTrash
            sx={{
              position: "relative",
              top: "5px",
            }}
          />
        </span>
      </Box>
      <Box bg="muted">
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
    </Grid>
  )
}

export default TodoSingle
