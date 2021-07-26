import React, { useState } from "react";
import {Link} from 'react-router-dom';

import { Row, Col } from "react-bootstrap";

import { useFormik } from "formik";
import * as Yup from "yup";

import { Icon, InlineIcon } from "@iconify/react";
import eyeOutline from "@iconify/icons-ion/eye-outline";
// import eyeSlash from "@iconify-icons/fa/eye-slash";

import sideimage from "../assets/side0image.png";
import styles from "../styles/signup.module.css";

export default function LoginForm() {
  document.title = "Stocka | Login";
  const [isPassword, setIsPassword] = useState(true);

  const formik = useFormik({
    initialValues: {
      organisation: "",
      name: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      organisation: Yup.string().required("Required"),
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .matches(
          "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$",
          "Must contain atleast 8 characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Row class={styles.grid + styles.center + " d-flex full-width"}>
        <Col className="sideimage">
          <img
            src={sideimage}
            alt="sidebar0image"
            className="d-inline"
            height="70%"
          />
        </Col>
        <Col className={styles.col_12 + " " + "col-10 full-width "}>
          <Row className="center pt-5">
            <h2 className="bold"> Welcome back</h2>
            <p className="d-flex justify-content-center">
              Kindly login to your account
            </p>
          </Row>
          <Row>
            <form onSubmit={formik.handleSubmit}>
    
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              <div
                className={
                  styles.position_relative +
                  " " +
                  styles.position_password +
                  " form-group position-relative password"
                }
              >
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  id="password"
                  name="password"
                  type={isPassword ? "password" : "text"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <Icon
                  onClick={() => setIsPassword(!isPassword)}
                  className={styles.position_absolute + " " + styles.eye}
                  icon={eyeOutline}
                  style={{ fontSize: "26px" }}
                />
               
              </div>
             
                
              <div className="form-group d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary mt-2 mb-3 bold _br5"
                >
                  Login
                </button>
              </div>
             <Row className="center">
             <Row className="d-flex justify-content-center">OR</Row>
                <Row>
                  <Link to="/signup">Create your account</Link>
                </Row>
             </Row>
            </form>
          </Row>
        </Col>
      </Row>
    </>
  );
}
