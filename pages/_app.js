import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/style.css"

const Layout = ({ children }) => <div className="layout">{children}</div>

export default ({ Component, pageProps }) => (
    <Layout>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </Layout>
)