/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"

import { Flex, Box, Input, Button } from "theme-ui"

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
    <Flex>
      <Box
        as="form"
        onSubmit={onSubmit}
        p={2}
      >
        <Input
          sx={{
            display: "inline-block",
            pr: 3,
          }}
          type="text"
          value={searchTerm}
          placeholder="Enter search term..."
          onChange={onChange}
        />{" "}
        <Button
          sx={{
            display: "inline-block",
            pr: 3,
          }}
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </Flex>
  )
}

export default TodoForm
