import React, { useState } from "react"
import { List, Typography, Form, Input, Button  } from "antd"
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons"
const { Title, Text } = Typography

function Todo() {
  const [input, setInput] = useState("")
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

  const addTodo = (e) => {
    const text = e.target.value
    const newTodos = [...todos, {text, isCompleted: false }]
    setTodos(newTodos)
    setInput("")
    }

  return (
    <div>
      <Title level={1} style={{ paddingTop: '20px'}}>Todo App</Title>
      {todos.map((todo, index) => (
        <TodoSingle
          key={index}
          index={index}
          todo={todo}
          changeTodo={changeTodo}
          deleteTodo={deleteTodo}
        />
      ))}
      <br></br>
      <Input
        placeholder="Another todo"
        size="large"
        value={input}
        onChange={e => setInput(e.target.value)}
        onPressEnter={addTodo}
        style={{ width: 300 }}
      />
    </div>
  )
}

function TodoSingle(props) {
  return (
    <div>
      <CheckOutlined
        onClick={() => props.changeTodo(props.index)}
        style={{ fontSize: "24px", color: "#08c" }}
      />
      <DeleteOutlined
        onClick={() => props.deleteTodo(props.index)}
        style={{ fontSize: "24px", color: "#08c", paddingLeft: "10px" }}
      />
      <Text style={{ fontSize: "24px", paddingLeft: "10px", textDecoration: props.todo.isCompleted ? 'line-through' : 'none' }}>
        {props.todo.text}
      </Text>
    </div>
  )
}

export default Todo
