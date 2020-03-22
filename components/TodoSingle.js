/** @jsx jsx */
import { jsx } from "theme-ui"

function TodoSingle(props) {

  return (
    <li
      sx={{
        m: 1,
        border: "1px",
        color: "text",
        textDecoration: props.todo.isCompleted ? "line-through" : "",
      }}
    >
      {props.todo.text}
      <button onClick={() => props.completeTodo(props.index)}>Complete</button>
    </li>
  )
}

export default TodoSingle