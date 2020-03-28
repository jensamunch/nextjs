import React, { useState } from 'react';

import { Menu } from "antd"
import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons"

const Navbar = ({ value }) => {

  const [greeting, setGreeting] = useState(
    'Hello Function Component!'
  );

  const [current, setCurrent] = useState(
  ['alipay']
  );

  const handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={current}
      mode="horizontal"
    >
      <Menu.Item key="mail">
        <MailOutlined />
        Navigation One
      </Menu.Item>
      <Menu.Item key="app" disabled>
        <AppstoreOutlined />
        Navigation Two
      </Menu.Item>
      <Menu.Item key="alipay">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      </Menu.Item>
    </Menu>
  )
}

export default Navbar
