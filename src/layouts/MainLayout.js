import React from "react";
import Cover from "../Cover";
import Navigation from "../Navigation";
import { Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";

function MainLayout() {
  return (
    <>
      <div className="flex-container">
        <Cover />
        <Navigation />
        <Row className="row">
          <Outlet />
        </Row>
      </div>
    </>
  );
}

export default MainLayout;
