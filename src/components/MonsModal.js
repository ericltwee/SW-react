import React from "react";
import mon1 from "../img/Praha/Praha.png";
import water from "../img/element/water-large.png";
import skill1 from "../img/Praha/Passing_Time.png";
import skill2 from "../img/Praha/Predicted_Futur.png";
import skill3 from "../img/Praha/Daydream.png";
import "../styling/main.scss";
import { Modal, Button } from "react-bootstrap";

function MonsModal(props) {
  const {family, id, image, name, rating} = props
  const stars = []

  for (let i=0; i<rating; i++){
    stars.push(<i key={i} className="fas fa-star fa-xs"></i>)
  }

  return (
    <Modal
      dialogClassName="monster"
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <img className="monster-attribute" src={water} alt="logo" />
        <div className="monster-info">
          <img className="monster-image" src={image} alt="logo" />
          <div>
            <h2 className="name-awakened">{name}</h2>
            <h6 className="name-unawakened">{family}</h6>
            <div className="monster-tier">
              {stars}
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
export default MonsModal;
