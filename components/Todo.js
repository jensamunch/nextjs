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

  const changeTodo = (index) => {
    const newTodos = [...todos]
    console.log(newTodos[index])
    if (newTodos[index].isCompleted == false) {
      newTodos[index].isCompleted = true
    } else {
      newTodos[index].isCompleted = false
    }
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
      <Heading>Todo List</Heading>
      <Box py={3}>
        {todos.map((todo, index) => (
          <TodoSingle
            key={index}
            index={index}
            todo={todo}
            changeTodo={changeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </Box>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default Todo
