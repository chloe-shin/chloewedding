import React from 'react';
import { Button, Container, Row, Col } from "react-bootstrap";


function Eat() {
  return (
    <div
      className="schedule"
      style={{
        width: "70%",
        minWidth: "350px",
        //  backgroundColor: "#FFF9E8",
        margin: "auto",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      <Container>
        <Row style={{ marginTop: "40px", marginBottom: "30px" }}>
          <h5 style={{ marginBottom: "30px" }}>Mia Resort</h5>
          <Col sm="5">
            <div
              style={{ height: "200px", backgroundColor: "lightGrey" }}
            ></div>
          </Col>
          <Col sm="7">
            Lumpsum phodkjsl djfkslie losejrkm difmsd Lumpsum phodkjsl djfkslie
            losejrkm difmsd Lumpsum phodkjsl djfkslie losejrkm difmsd Lumpsum
            phodkjsl
          </Col>
        </Row>
        <hr></hr>

        <Row style={{ marginTop: "20px", marginBottom: "30px" }}>
          <h5 style={{ marginBottom: "30px" }}>The Anam</h5>
          <Col sm="5">
            <div
              style={{ height: "200px", backgroundColor: "lightGrey" }}
            ></div>
          </Col>
          <Col sm="7">
            Lumpsum phodkjsl djfkslie losejrkm difmsd Lumpsum phodkjsl djfkslie
            losejrkm difmsd Lumpsum phodkjsl djfkslie losejrkm difmsd Lumpsum
            phodkjsl
          </Col>
        </Row>
        <hr></hr>

        <Row style={{ marginTop: "20px", marginBottom: "30px" }}>
          <h5 style={{ marginBottom: "30px" }}>The Alma</h5>
          <Col sm="5">
            <div
              style={{ height: "200px", backgroundColor: "lightGrey" }}
            ></div>
          </Col>
          <Col sm="7">
            Lumpsum phodkjsl djfkslie losejrkm difmsd Lumpsum phodkjsl djfkslie
            losejrkm difmsd Lumpsum phodkjsl djfkslie losejrkm difmsd Lumpsum
            phodkjsl
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Eat; 