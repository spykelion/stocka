import React, {useState} from "react";
import UserHeader from "./UserHeader";

import { useFormik } from "formik";
import * as Yup from "yup";

import { Container, Table, Row, Col, Button, ButtonGroup, Modal, Form } from "react-bootstrap";

export default function ProductPage() {
    document.title = "Stocka | Product-page";
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const hideMe = (show)=>setShow(show);
  return (
    <>
      <UserHeader />
      <Container>
        <Row className="mt-4 mb-3">
            <Col>
            <h4>Products</h4>
            </Col>
            <Col>
            <ButtonGroup>
                <Button variant="primary" onClick={handleShow}>
                    Add new product
                </Button>
            </ButtonGroup>

            </Col>
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sugar</td>
              <td>Commodity</td>
              <td>a minimal description</td>
              <td>4214</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sugar</td>
              <td>Commodity</td>
              <td>a minimal description</td>
              <td>4214</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Sugar</td>
              <td>Commodity</td>
              <td>a minimal description</td>
              <td>4214</td>
            </tr>
          </tbody>
        </Table>
      </Container>

      {
          show? <AddProduct callback={hideMe} show={handleShow}/> : null
      }
    </>
  );
}

function AddProduct(props) {
    const [show, setShow] = useState(props.show);

    const handleClose = () => {
        setShow(false);
        props.callback(show);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      description: "",
      price: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      category: Yup.string("Invalid category name").required("Required"),
      description: Yup.string().required("Required"),
      price: Yup.string().required("Required")
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
    return (
      <div>
        <Modal show={props.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adding a new Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  className={
                    formik.touched.name && formik.errors.name
                      ? "form-control outline-danger"
                      : "form-control"
                  }
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <small className="text-danger d-block">
                    {formik.errors.name}
                  </small>
                ) : null}
              </div>
              <div className="form-group mt-3">
                <label htmlFor="category">Category</label>
                <input
                  className={
                    formik.touched.category && formik.errors.category
                      ? "form-control outline-danger"
                      : "form-control"
                  }
                  id="category"
                  name="category"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.category}
                />
                {formik.touched.category && formik.errors.category ? (
                  <small className="text-danger d-block">
                    {formik.errors.category}
                  </small>
                ) : null}
              </div>
              <div className="form-group mt-3">
                <label htmlFor="description">Description</label>
                <textarea cols="30" rows="10"
                  className={
                    formik.touched.name && formik.errors.description
                      ? "form-control outline-danger"
                      : "form-control"
                  }
                  id="description"
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                />
                {formik.touched.description && formik.errors.description ? (
                  <small className="text-danger d-block">
                    {formik.errors.description}
                  </small>
                ) : null}
              </div>
              <div className="form-group mt-3">
                <label htmlFor="price">Price</label>
                <input
                  className={
                    formik.touched.price && formik.errors.price
                      ? "form-control outline-danger"
                      : "form-control"
                  }
                  id="price"
                  name="price"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.price}
                />
                {formik.touched.price && formik.errors.price ? (
                  <small className="text-danger d-block">
                    {formik.errors.price}
                  </small>
                ) : null}
              </div>
              <div className="form-group mt-3">
                  <Button variant="primary" type="submit"> Save </Button>
              </div>
              </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
      </div>
    );
    
}