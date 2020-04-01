/** @jsx jsx */
import { jsx, Button, Text, Flex, Box, Heading, Input } from "theme-ui"

import React, { useState, useEffect } from "react"
import TodoRow from "./TodoRow"

function Todo() {
  const [todos, setTodos] = useState([])
  const [inputTodo, setInputTodo] = useState("")

  useEffect(() => {
    async function getData() {
      const res = await fetch("/api/getTodos")
      const newData = await res.json()
      setTodos(newData)
      console.log(newData)
    }
    getData()
  }, [])

  const onChange = (e) => {
    const value = e.target.value
    setInputTodo(value)
  }

  const addTodo = (e) => {
    e.preventDefault()

    // Update local arrray
    const newTodos = [...todos, { title: inputTodo, completed: false }]
    //setTodos(newTodos)
    console.log(newTodos)

    // Update remote API
    console.log(inputTodo)
    const options = {
      method: "POST",
      body: JSON.stringify({ title: inputTodo, completed: false }),
      headers: {
        "Content-Type": "application/json",
      },
    }
    fetch("/api/addTodo", options)
      .then((res) => res.json())
      .catch((err) => console.log(err))
  }

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
    console.log(e)

    // remove locally
    //const removeTodos = [...todos]
    //removeTodos.splice(index, 1)
    //setTodos(removeTodos)

    const options = {
      method: "POST",
      body: JSON.stringify({ id: e }),
      headers: {
        "Content-Type": "application/json",
      },
    }
    fetch("/api/deleteTodo", options)
      .then((res) => res.json())
      .catch((err) => console.log(err))
  }


  return (
    <div>
      <Heading>Todo List</Heading>
      <Box py={3}>
        {todos.length > 0 ? (
          todos.map((d) => (
            <TodoRow
              key={d}
              //realId={d.ref["@ref"].id}
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
      <Box pt={3} as="form" onSubmit={addTodo}>
        <Input
          sx={{
            width: "200px",
            display: "inline",
            ":focus": {
              outline: 0,
            },
          }}
          type="text"
          color="text"
          value={inputTodo}
          placeholder="Something to do..."
          onChange={onChange}
        />{" "}
        <Button
          sx={{
            display: "inline",
            pr: 3,
            bg: "background",
            color: "text",
            fontWeight: "bold",
            border: "2px",
            borderColor: "text",
            borderStyle: "solid",
            ":focus": {
              outline: 0,
            },
          }}
          type="submit"
        >
          Add item
        </Button>
      </Box>
    </div>
  )
}

export default Todo
