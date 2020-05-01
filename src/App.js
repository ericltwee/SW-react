import React from "react";
import "./styling/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./img/logo.png";
import Menu from "./components/menu";
import Monster from "./components/monster";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-title">Monster Database Mock Up</p>
        <div className="App-pool">
          <div className="App-btn">
            <Monster />
          </div>
          <div className="App-btn">
            <Monster />
          </div>
          <div className="App-btn">
            <Monster />
          </div>
          <div className="App-btn">
            <Monster />
          </div>
        </div>
        <Menu />
        <img className="App-logo" src={logo} alt="logo" />
      </header>
    </div>
  );
}

export default App;
