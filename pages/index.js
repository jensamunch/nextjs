import { Layout } from "antd"
const { Header, Footer, Content } = Layout
import Head from "../components/Head"
import Navbar from "../components/Navbar"

export default (props) => (
  <Layout>
    <Header><Navbar/></Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>
)
