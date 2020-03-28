import { Row, Col } from "antd"
import Head from "../components/Head"
import Navbar from "../components/Navbar"

export default (props) => (
  <div>
    <Row justify="space-around" style={{ padding: "20px 10px 0px" }}>
      <Col
        xs={24}
        sm={24}
        lg={20}
        xl={20}
        style={{ color: "gray", borderStyle: "dotted" }}
      >
        <Navbar />
      </Col>
    </Row>
    <Row justify="space-around" style={{ padding: "0px 10px" }}>
      <Col
        xs={24}
        sm={24}
        lg={20}
        xl={20}
        style={{ color: "gray", borderStyle: "dotted" }}
      >
        NATIVE
      </Col>
    </Row>
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
