import React, { Component } from "react";
import "../styling/main.scss";
import MonsCard from "./MonsCard";

class Monsterr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.airtable.com/v0/app25hZv7kC5FduwL/Monster%20List?api_key=key8txJ4DSHAMTJyD"
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.setState({ monsters: data.records });
      })
      .catch((err) => {
        // Error
      });
  }

  render() {
    return (
      this.state.monsters.length === 0
        ?
        <div className="container">
          Loading
        </div>
        :
        <div>
          <div className="card-deck">
            {this.state.monsters.map((monster) => (
              <MonsCard key={monster.id} id={monster.id} name={monster.fields['Name']} family={monster.fields['Family Name']} image={monster.fields['Image'][0].url} rating={monster.fields['Rating']} />
            ))}
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
