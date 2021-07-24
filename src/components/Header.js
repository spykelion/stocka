import React from "react";
import {
  Row,
  Col,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <Row>
      <Navbar bg="light" expand="lg">
        <Col>
          {" "}
          <Navbar.Brand href="/">
            <img
              src={logo}
              width=""
              height=""
              className="d-inline-block align-top"
              alt="Stocka logo"
            />
          </Navbar.Brand>
        </Col>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Col>
            <Nav className="me-auto">
              <Nav.Link href="/about">Features</Nav.Link>
              <NavDropdown title="Pricing" id="basic-nav-dropdown">
                <NavDropdown.Item href="#"> Inventory Management </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/login">
                  Analytics
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  Reports
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Col>
          <Col sm lg="2" className={styles.mb_2 }>
            <Link to="/login" className=" btn btn-outline-primary lt-1">
              LOGIN
            </Link>
          </Col>
          <Col sm lg="2">
            <Link to="/signup" className="btn btn-primary lt-1">SIGNUP</Link>
          </Col>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  );
}

export default Header;
