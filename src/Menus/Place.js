import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Accomodation from "./Submenus/Accomodation";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Drink from "./Submenus/Drink";
import Eat from "./Submenus/Eat";
import Sightseeing from "./Submenus/Sightseeing";

const ELEMENT = [
  { value: "accommodation" },
  { value: "eat" },
  { value: "drink" },
  { value: "sight" },
];

function Place() {
  const [displayedComponent, setDisplayedComponent] = useState("accommodation");

  const showComponent = (componentName) => {
    setDisplayedComponent(componentName);
  };

  const handleStyleButton = (value) => {
    if (!value) return;

    return {
      marginRight: "20px",
      backgroundColor:
        displayedComponent === `${value}` ? "Black" : "transparent",
      color: displayedComponent === `${value}` ? "white" : "black",
    };
  };

  return (
    <Container className="container_center">
      <img
        className="party_flower"
        src="/images/nhatrang.jpeg"
        alt="nha_trang"
        width="100%"
      />
      <h1 style={{ fontFamily: "Lora, italic", marginTop: 30 }}>
        N H A &nbsp; T R A N G &nbsp;
      </h1>
      <p>
        We are so excited to welcome you in our{" "}
        <b>favorite beach city in Vietnam, Nha Trang. </b>
        <br></br>
        Here's what we recommend for your enjoyable stay!
      </p>
      <Row>
        {ELEMENT.map((el, index) => (
          <Col
            // xs
            key={index}
            lg={{ span: 2, offset: 1 }}
            style={{
              marginTop: 1.8,
            }}
          >
            <Button
              style={handleStyleButton(el.value)}
              variant="outline-dark"
              onClick={() => showComponent(el.value)}
            >
              {el.value}
            </Button>
          </Col>
        ))}
      </Row>

      {/* Conditionally render the selected component */}
      {displayedComponent === "accommodation" && <Accomodation />}
      {displayedComponent === "eat" && <Eat />}
      {displayedComponent === "drink" && <Drink />}
      {displayedComponent === "sight" && <Sightseeing />}
    </Container>
  );
}

export default Place;
