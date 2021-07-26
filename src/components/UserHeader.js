import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Icon, InlineIcon } from "@iconify/react";
import userIcon from "@iconify-icons/uil/user";
import bellIcon from "@iconify-icons/il/bell";

import {
  NavDropdown,
  Row,
  Col,
  Nav,
  Navbar,
  Button,
  Modal,
  Badge,
} from "react-bootstrap";
import styles from "../styles/userHeader.module.css";
import logo from "../assets/logo.png";

export default function UserHeader() {
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const hideMe = (show)=>setShow(show);
  return (
    <Row class="m-0 p-0">
      <Navbar bg="light" expand="lg">
        <Col>
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
            <Col></Col><Col></Col><Col></Col>
               <Col className="self-center">
            {/* <Nav className="me-auto"> */}

              <Button
                variant=""
                onClick={handleShow}
                className="position-relative"
              >
                <Icon icon={bellIcon} style={{ fontSize: "35px" }} />
                <Badge
                  bg="danger"
                  className={styles.toTop + " border-radius-50 position-absolute"}
                >
                  5
                </Badge>
              </Button>
             
            {/* </Nav> */}
          </Col>
          <Col className="self-center">
              <Link href="/profile">
                <Icon icon={userIcon} style={{ fontSize: "35px" }} />
              </Link>
           
          </Col>
        
        </Navbar.Collapse>
      </Navbar>
      {show ? <Notification callback={hideMe} show={handleShow} /> :null}
    </Row>
  );
}

function Notification(props) {
  const [show, setShow] = useState(props.show);

  const handleClose = () => {
      setShow(false);
      props.callback(show);
};

  return (
    <div>
      <Modal size="sm" show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Notification center. We'll notify you</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Mark as read
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


