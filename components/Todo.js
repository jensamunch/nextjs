/** @jsx jsx */
import { jsx } from "theme-ui"
import { Button, Text, Flex, Box, Heading } from "theme-ui"
import React, { useState, useEffect } from "react"
import TodoRow from "../components/TodoRow"
import TodoForm from "../components/TodoForm"

function Todo() {

  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await fetch('/api')
      const newData = await res.json()
      setData(newData)
    }
    getData()
  }, [])

  const [todo, setTodo] = useState("jens")
  const [value, setValue] = useState("niklas")

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
    const newTodos = [...todos, { title, completed: false }]
    setTodos(newTodos)
  }

  return (
    <div>
      <Heading>Todo List</Heading>
      <Box py={3}>
        {data.length > 0 ? (
          data.map((d) => (
            <TodoRow completed={d.data.completed} title={d.data.title} />
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
