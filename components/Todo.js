/** @jsx jsx */
import { jsx } from "theme-ui"

import React, { useState } from "react"
import TodoSingle from "../components/TodoSingle"
import TodoForm from "../components/TodoForm"

function Todo() {
  const [value, setValue] = useState("")

  const [todos, setTodos] = useState([
    {
        text: "Learn about React",
        isCompleted: false
      },
      {
        text: "Meet friend for lunch",
        isCompleted: false
      },
      {
        text: "Build really cool todo app",
        isCompleted: false
      }
  ])

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }]
    setTodos(newTodos)
  }

  return (
    <div>
      <h1
        sx={{
          fontSize: 4,
          color: "text",
        }}
      >
        Todo List
      </h1>
      <ul
        sx={{
          fontSize: 1,
          color: "text",
        }}
      >
        {todos.map((todo, index) => (
          <TodoSingle key={index} index={index} todo={todo} completeTodo={completeTodo} />
        ))}
      </ul>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default Todo
