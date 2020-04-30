import React from "react";
import mon1 from "../img/Lushen.png";
import "../styling/main.scss";
import { Modal, Button } from "react-bootstrap";

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
        <div className="monster-info">
          <img className="monster-image" src={mon1} alt="logo" />{" "}
          <div>
            <h2 className="name-awakened">Lushen</h2>
            <h5 className="name-unawakened">Joker</h5>
          </div>
        </div>
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
      outline: none;
    }
    `}
      </style>
      <Button
        variant="flat"
        className="monster-btn"
        onClick={() => setModalShow(true)}
      >
        <img className="monster-btn-img" src={mon1} alt="logo" />
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Monster;
