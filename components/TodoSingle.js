/** @jsx jsx */
import { jsx } from "theme-ui"
import { Button } from 'theme-ui'

function TodoSingle(props) {
  return (
    <div>
      <div
        sx={{
          display: "inline-block",
          color: "text",
          fontSize: 3,
          pr: 3,
          mb: 2,
          textDecoration: props.todo.isCompleted ? "line-through" : "",
        }}
      >
        {props.todo.text}
      </div>
      <Button
        sx={{
          display: "inline-block",
          pr: 3,
        }}
        onClick={() => props.completeTodo(props.index)}
      >
        Complete
      </Button>
      <Button onClick={() => props.deleteTodo(props.index)}>Delete</Button>
    </div>
  )
}

export default TodoSingle
