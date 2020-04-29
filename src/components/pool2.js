import React from "react";
import mon1 from "../img/Lushen.png";
import full1 from "../img/Lushen_full.png";
import "../styling/main.scss";
import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      dialogClassName="custom-modal"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <h4>Lushen</h4>
        <div className="monster-image">asdf</div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Edit</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Monster() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: none;
    }
    `}
      </style>
      <Button
        variant="flat"
        className="monster-btn"
        onClick={() => setModalShow(true)}
      >
        <img className="monster-full" src={mon1} alt="logo" />
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Monster;
