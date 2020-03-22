/** @jsx jsx */
import { jsx } from "theme-ui"
import { Button, Text, Flex, Box, Heading } from "theme-ui"

import React, { useState } from "react"
import TodoSingle from "../components/TodoSingle"
import TodoForm from "../components/TodoForm"

function Todo() {
  const [value, setValue] = useState("")

  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ])

  const completeTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const deleteTodo = (index) => {
    const removeTodos = [...todos]
    removeTodos.splice(index, 1)
    setTodos(removeTodos)
  }
  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }]
    setTodos(newTodos)
  }

  return (
    <div>
      <Box p={2}>
        <Heading>Todo List</Heading>
      </Box>
      <Box>
        {todos.map((todo, index) => (
          <TodoSingle
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </Box>
      <Box>
        <TodoForm addTodo={addTodo} />
      </Box>
    </div>
  )
}

export default Todo
