import React from "react";
import "../styling/main.scss";
import { Modal, Button, Form, Col } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      dialogClassName="monster"
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Form className="upload-form">
          <Form.Group className="w-75 mx-auto d-block">
            <Form.File id="custom-file" label="Monster Avatar" custom />
          </Form.Group>
          <Form.Row>
            <Col>
              <Form.Group controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Awaken Name" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="formGridPassword">
                <Form.Label>Family Name</Form.Label>
                <Form.Control placeholder="Unawaken Name" />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Grade / Tier</Form.Label>
                <Form.Control as="select">
                  <option id="nat5">★★★★★</option>
                  <option id="nat4">★★★★</option>
                  <option id="nat3">★★★</option>
                  <option id="nat2">★★</option>
                  <option id="nat1">★</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Attribute</Form.Label>
                <Form.Control as="select">
                  <option id="Fire">Fire</option>
                  <option id="Water">Water</option>
                  <option id="Wind">Wind</option>
                  <option id="Light">Light</option>
                  <option id="Dark">Dark</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Skills</Form.Label>
            <Form.Control classname="my-1" placeholder="Skill.1 name..." />
            <Form.Control classname="my-1" placeholder="Skill.2 name..." />
            <Form.Control classname="my-1" placeholder="Skill.3 name..." />
          </Form.Group>

          <Button
            variant="success"
            type="submit"
            className="w-75 mx-auto d-block"
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function Upload() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <style type="text/css">
        {`
    .btn-basic {
        outline : none;
    }
    `}
      </style>
      <Button
        variant="basic"
        className="Upload-btn"
        onClick={() => setModalShow(true)}
      >
        <i className="fas fa-user-plus fa-3x"></i>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Upload;
