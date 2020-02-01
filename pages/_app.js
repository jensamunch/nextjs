import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from '../themes/theme'
import Header from '../components/Header'
import {
    Box
  } from "rebass/styled-components";

const Style = createGlobalStyle`
* { box-sizing: border-box; }
body { margin:0; }
`

const Layout = ({ children }) => <div className="layout">{children}</div>

export default ({ Component, pageProps }) => (
    <ThemeProvider theme={theme}>
        <Style />
        <Header />
        <Box color="black" bg="yellow" p={3} height={40}>
            Hello
        </Box>
        <Component {...pageProps} />
    </ThemeProvider>
)