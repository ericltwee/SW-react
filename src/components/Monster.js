import React, { Component } from "react";
import "../styling/main.scss";
import { Button } from "react-bootstrap";
import MonsModal from "./sketch.js";

class Monsterr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monster: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.airtable.com/v0/app25hZv7kC5FduwL/Monster%20List?api_key=key8txJ4DSHAMTJyD"
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.setState({ monster: data.records });
      })
      .catch((err) => {
        // Error
      });
  }

  render() {
    return (
      <div className="container">
        <div>
          <div className="card-deck">
            {this.state.monster.map((data) => (
              <MonsCard {...data.fields} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Monsterr;

function MonsCard({ Image }) {
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
        <img className="monster-btn-img" src={Image[0].url} alt="Avatar" />
      </Button>

      <MonsModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

// const MonsCardd = ({ Image, year, description, imageURL }) => (
//   <div className="card">
//     <img className="monster-btn-img" src={Image[0].url} alt="Avatar" />
//     <div className="card-body">
//       <h5 className="card-title">{years}</h5>
//       <p className="card-text">{description}</p>
//       <p className="card-text">
//         <small className="text-muted">{year}</small>
//       </p>
//     </div>
//   </div>
// );
