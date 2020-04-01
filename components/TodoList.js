/** @jsx jsx */
import { jsx, Button, Text, Flex, Box, Heading } from "theme-ui"

import React, { useState, useEffect } from "react"
import fetch from 'isomorphic-unfetch'
import TodoRow from "./TodoRow"
import TodoForm from "./TodoForm"

function Todo() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await fetch("/api/getTodos")
      const newData = await res.json()
      setData(newData)
      console.log(newData)
    }
    getData()
  }, [])

  const [todo, setTodo] = useState("jens")
  const [value, setValue] = useState("niklas")

  const changeTodo = (e) => {
    console.log(e)
/*     const newTodos = [...todos]
    console.log(newTodos[index])
    if (newTodos[index].isCompleted == false) {
      newTodos[index].isCompleted = true
    } else {
      newTodos[index].isCompleted = false
    }
    setTodos(newTodos) */
  }

  const deleteTodo = (e) => {
/*     const removeTodos = [...todos]
    removeTodos.splice(index, 1)
    setTodos(removeTodos) */
  }
  const addTodo = (e) => {
    console.log(e)
/*     const newTodos = [...todos, { title, completed: false }]
    setTodos(newTodos) */
  }

  return (
    <div>
      <Heading>Todo List</Heading>
      <Box py={3}>
        {data.length > 0 ? (
          data.map((d) => (
            <TodoRow
              key={d.ts}
              id={d.ts}
              completed={d.data.completed}
              title={d.data.title}
              changeTodo={changeTodo}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <>
            <TodoRow loading />
            <TodoRow loading />
            <TodoRow loading />
          </>
        )}
      </Box>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default Todo
