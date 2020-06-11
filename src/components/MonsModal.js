import React, { useState, useEffect } from "react";
import water from "../img/element/water-large.png";
import fire from "../img/element/fire-large.png";
import light from "../img/element/light-large.png";
import wind from "../img/element/wind-large.png";
import dark from "../img/element/dark-large.png";
import "../styling/main.scss";
import { Modal, Button, Row, Col } from "react-bootstrap";

const elementRef = {
  water,
  fire,
  wind,
  light,
  dark
}

function MonsModal(props) {
  const { family, id, image, name, rating, element } = props
  const stars = []
  const [skills, setSkills] = useState([]);

  // TODO: replace api key and table keys with env variables

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/app25hZv7kC5FduwL/Skills?api_key=key8txJ4DSHAMTJyD&filterByFormula={MonsterID}="${id}"`
    )
      .then((resp) => resp.json())
      .then((data) => {
        data.records.forEach(record => {
          setSkills(s => [...s, record.fields])
        });
      })
      .catch((err) => {
        // Error
      });

  }, [id])

  for (let i = 0; i < rating; i++) {
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
        <img className="monster-attribute" src={elementRef[element.toLowerCase()]} alt="logo" />
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
          {skills.length
            ? skills.map(skill => (
              <>
                <Row key={skill.Icon[0].id}>
                  <Col md={3}>
                    <img id={skill.Icon[0].id} src={skill.Icon[0].url} alt="" />
                  </Col>
                  <Col md={9}>
                    <small>{skill["Description"]}</small>
                  </Col>
                </Row>
                <hr />
              </>
            ))
            : <h3>Loading...</h3>}
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
