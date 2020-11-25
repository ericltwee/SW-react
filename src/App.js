import React from "react";
import "./styling/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./img/logo.png";
import Monsterr from "./components/Monster";

import Menu from "./components/menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Monster Database Mock Up</h1>
        <div className="App-pool">
          <Monsterr />
        </div>
        {/* <Menu /> */}
        <img className="App-logo" src={logo} alt="logo" />
      </header>
    </div>
  );
}

export default App;
