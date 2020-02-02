import React from 'react'
import App from 'next/app'
import { ThemeProvider, useColorMode, jsx, Container } from 'theme-ui'

import Header from '../components/Header'
import theme from '../src/theme'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Container bg='muted'>
          <Header />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider >
    )
  }
}

export default MyApp