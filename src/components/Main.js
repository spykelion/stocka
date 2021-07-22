import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import styles from "../styles/main.module.css";
import inventory from "../assets/inventory.png";
import analytics from "../assets/analytics.png";
import reports from "../assets/reports.png";
import dash1 from "../assets/dash1.png";

function Main() {
  return (
    <div>
      <Row className={"border-1 h-70"}>
        <Col className={styles.hero3 + " p-5 mb-3"}>
          <h1 className="mt-10 mb-5 text-white lt-1 bold">
            Inventory management we got you
          </h1>
          <h5 className="mt-2 mb-3 text-white">
            With our robust inventory management software, you can increase your
            sales and keep track of every unit.
          </h5>
          <Button
            className={styles._br5 + " btn btn-primary mt-5 mb-5 bold lt-1"}
          >
            SIGN UP FOR FREE
          </Button>
        </Col>
        <Col className={styles.hero1 + " none none1"}></Col>
        <Col className={styles.hero2 + " none none2"}></Col>
      </Row>
      <Row className="d-flex justify-content-center color-primary mt-3" >
        <Col className="d-flex justify-content-center color-primary mt-3">
          <h4>Make the switch from paper to digital</h4>
        </Col>
      </Row>
      <Row>
        <Col className="">
          <div className="d-flex justify-content-center">
            <img src={inventory} alt="inventory icon" />
          </div>
          <Row className="d-flex justify-content-center">
            <h5 className="center bold mt-3">INVENTORY MANAGEMENT</h5>
          </Row>
          <Row className="d-flex justify-content-center">
            <p className="center left ">
              Manage your offline and online stocks with our efficient
              management system.
            </p>
          </Row>
        </Col>
        <Col className="">
          <div className="d-flex justify-content-center">
            <img src={analytics} alt="analytics icon" />
          </div>
          <Row className="d-flex justify-content-center">
            <h5 className="center bold mt-3">ANALYTICS</h5>
          </Row>
          <Row className="d-flex justify-content-center">
            <p className="center left ">
              Improve your sales with our robust inventory management software
              and track each unit.
            </p>
          </Row>
        </Col>
        <Col className="">
          <div className="d-flex justify-content-center">
            <img src={reports} alt="reports icon" />
          </div>
          <Row className="d-flex justify-content-center">
            <h5 className="center bold mt-3">REPORTS</h5>
          </Row>
          <Row className="d-flex justify-content-center">
            <p className="center left ">
              Improve your sales with our robust inventory management software
              and track each unit.
            </p>
          </Row>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center ">
        <img src={dash1} alt="dashboard snip" />
      </Row>
      <Row className="d-flex justify-content-center mt-3" >
        <Col className="d-flex justify-content-center mb-5">
          <h4>Testimonials</h4>
        </Col>
      </Row>
      <Row>
        <Col className="">
          <div className="d-flex justify-content-center">
            <img src={inventory} alt="inventory icon" />
          </div>
          <Row className="d-flex justify-content-center">
            <h5 className="center bold mt-3">INVENTORY MANAGEMENT</h5>
          </Row>
          <Row className="d-flex justify-content-center">
            <p className="center left ">
              Manage your offline and online stocks with our efficient
              management system.
            </p>
          </Row>
        </Col>
        <Col className="">
          <div className="d-flex justify-content-center">
            <img src={analytics} alt="analytics icon" />
          </div>
          <Row className="d-flex justify-content-center">
            <h5 className="center bold mt-3">ANALYTICS</h5>
          </Row>
          <Row className="d-flex justify-content-center">
            <p className="center left ">
              Improve your sales with our robust inventory management software
              and track each unit.
            </p>
          </Row>
        </Col>
        <Col className="">
          <div className="d-flex justify-content-center">
            <img src={reports} alt="reports icon" />
          </div>
          <Row className="d-flex justify-content-center">
            <h5 className="center bold mt-3">REPORTS</h5>
          </Row>
          <Row className="d-flex justify-content-center">
            <p className="center left ">
              Improve your sales with our robust inventory management software
              and track each unit.
            </p>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Main;
