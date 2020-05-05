import React from "react";
import mon1 from "../img/Lushen/Lushen.png";
import wind from "../img/element/wind-large.png";
import skill1 from "../img/Lushen/skill1.png";
import skill2 from "../img/Lushen/skill2.png";
import skill3 from "../img/Lushen/skill3.png";
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
        <img className="monster-attribute" src={wind} alt="logo" />
        <div className="monster-info">
          <img className="monster-image" src={mon1} alt="logo" />
          <div>
            <h2 className="name-awakened">Lushen</h2>
            <h6 className="name-unawakened">Joker</h6>
            <div className="monster-tier">
              <i className="fas fa-star fa-xs"></i>
              <i className="fas fa-star fa-xs"></i>
              <i className="fas fa-star fa-xs"></i>
              <i className="fas fa-star fa-xs"></i>
            </div>
          </div>
        </div>
        <div className="monster-skill">
          <div>
            <img id="monster-skill-1" src={skill1} alt="logo" />
            skill descriptions
          </div>
          <div>
            <img id="monster-skill-2" src={skill2} alt="logo" />
            skill descriptions
          </div>
          <div>
            <img id="monster-skill-3" src={skill3} alt="logo" />
            skill descriptions
          </div>
        </div>
        <div className="monster-btn-edit">
          <Button variant="secondary" onClick={props.onHide}>
            <i className="fas fa-pencil-alt"></i>
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function Lushen() {
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

export default Lushen;
