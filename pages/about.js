import { Layout } from "antd"
const { Header, Footer, Content } = Layout
import Head from "../components/Head"
import Navbar from "../components/Navbar"

export default (props) => (
  <div>
    <div className="navbar">
      <Navbar />
    </div>
    <div className="container">HOME MADE</div>
    <style jsx>{`
      .navbar {
        margin: 50px 50px;
        border: red;
        border-style: solid;
        color: red;
      }
      .container {
        margin: 50px 50px;
        border: red;
        border-style: solid;
        color: red;
      }
    `}</style>
  </div>
)
