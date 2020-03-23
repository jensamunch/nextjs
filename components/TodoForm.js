/** @jsx jsx */

import React, { useState } from "react"
import { jsx, Box, Input, Button } from "theme-ui"

export function TodoForm(props) {
  const [searchTerm, setSearchTerm] = useState("")

  const onChange = (e) => {
    const { value } = e.target
    setSearchTerm(value)
  }

  const onSubmit = (e) => {
    // Prevents GET request/page refresh on submit
    e.preventDefault()
    props.addTodo(searchTerm)
    setSearchTerm("")
  }

  return (
    <Box pt={3} as="form" onSubmit={onSubmit}>
      <Input
        sx={{
          width: "200px",
          display: "inline",
          ':focus': {
            outline:0
          }
        }}
        type="text"
        color= "text"
        value={searchTerm}
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
          ':focus': {
            outline:0
          }
        }}
        type="submit"
      >
        Add item
      </Button>
    </Box>
  )
}

export default TodoForm
