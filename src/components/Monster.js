import React, { Component } from "react";
import "../styling/main.scss";
import MonsCard from "./MonsCard";

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
