import React, { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

import { Menu } from "antd"
import { CheckSquareOutlined, HeartOutlined } from "@ant-design/icons"

const Navbar = ({ value }) => {
  const router = useRouter()

  const handleClick = (e) => {
    console.log("click ", e)
    router.push(e.key)
  }

  return (
    <Menu onClick={handleClick} selectedKeys={[router.pathname]} mode="horizontal">
      <Menu.Item key="/">
        <CheckSquareOutlined />
        Todo App
      </Menu.Item>
      <Menu.Item key="/about">
        <HeartOutlined />
        About
      </Menu.Item>
    </Menu>
  )
}

export default Navbar
