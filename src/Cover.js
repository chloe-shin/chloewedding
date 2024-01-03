import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
   } from "react-router-dom";

function Cover() {
 const location = useLocation().pathname;

 return (
  <Container className="container_center">
   {location === "/" ? (
    <img className="cover_image1" src="/images/cover1.png" />
   ) : (
    <img className="cover_image2" src="images/cover2.png" />
   )}
  </Container>
 );
}

export default Cover;
