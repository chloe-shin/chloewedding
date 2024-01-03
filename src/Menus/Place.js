import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Accomodation from "./Submenus/Accomodation";
import Drink from "./Submenus/Drink";
import Eat from "./Submenus/Eat";
import Sightseeing from "./Submenus/Sightseeing";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Place() {
 const [displayedComponent, setDisplayedComponent] = useState(null);

 const showComponent = (componentName) => {
  setDisplayedComponent(componentName);
 };

 return (
  <Container className="container_center">
   <img className="party_flower" src="/images/nhatrang.jpeg" />
   <h1 style={{ fontFamily: "Lora, italic", marginTop: 30 }}>
    {" "}
    N H A &nbsp; T R A N G &nbsp;
   </h1>
   <p>
    We are so excited to welcome you in our{" "}
    <b>favorite beach city in Vietnam, Nha Trang. </b>
    <br></br>
    Here's what we recommend for your enjoyable stay!
   </p>
   <Row>
    <Col xs lg={{span: 2, offset: 2}}>
     <Button
      style={{
       marginRight: "20px",
       backgroundColor:
        displayedComponent === "accomodation" ? "Black" : "transparent",
       color: displayedComponent === "accomodation" ? "white" : "black",
      }}
      variant="outline-dark"
      onClick={() => showComponent("accomodation")}
     >
      Accomodation
     </Button>
    </Col>
    <Col xs lg="2">
     <Button
      style={{
       marginRight: "20px",
       backgroundColor: displayedComponent === "eat" ? "Black" : "transparent",
       color: displayedComponent === "eat" ? "white" : "black",
      }}
      variant="outline-dark"
      onClick={() => showComponent("eat")}
     >
      Eat
     </Button>
    </Col>
    <Col xs lg="2">
     <Button
      style={{
       marginRight: "20px",
       backgroundColor:
        displayedComponent === "drink" ? "Black" : "transparent",
       color: displayedComponent === "drink" ? "white" : "black",
      }}
      variant="outline-dark"
      onClick={() => showComponent("drink")}
     >
      Drink
     </Button>
    </Col>
    <Col xs lg="2">
     <Button
      style={{
       backgroundColor:
        displayedComponent === "sight" ? "Black" : "transparent",
       color: displayedComponent === "sight" ? "white" : "black",
      }}
      variant="outline-dark"
      onClick={() => showComponent("sight")}
     >
      Sightseeing
     </Button>
    </Col>
   </Row>

   {/* Conditionally render the selected component */}
   {displayedComponent === "accomodation" && <Accomodation />}
   {displayedComponent === "eat" && <Eat />}
   {displayedComponent === "drink" && <Drink />}
   {displayedComponent === "sight" && <Sightseeing />}
  </Container>
 );
}

export default Place;
