import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaHeart, FaBars, FaChevronDown,FaRegHeart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { BsFlower1 } from "react-icons/bs";
import { IoFlowerOutline } from "react-icons/io5";


const menuItem = [
 { label: "HOME", path: "/" },
//  { label: "Story", path: "/story" },
 { label: "PARTY", path: "/party" },
 { label: "PLACE", path: "/place" },
 { label: "TRAVEL", path: "/travel" },
//  { label: "ACCOMODATION", path: "/accomodation" },
 { label: "ATTIRE", path: "/attire" },
 { label: "QUESTION", path: '/question' },
 { label: 'RSVP', path: '/rsvp' },

];

function Navigation() {
 return (
  
  <Navbar expand="lg" className="bg-body" >
   <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler"> <IoFlowerOutline/>  MENU </Navbar.Toggle>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="m-auto">
      {menuItem.map((item, index) => (
       <Nav.Link>
        <Link to={item.path}>{item.label}</Link>
       </Nav.Link>
      ))}
     </Nav>
    </Navbar.Collapse>
   </Container>
  </Navbar>
  
 );
}

export default Navigation;
