import React from "react";
import "./styling/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./img/logo.png";
import Menu from "./components/menu";
import Lushen from "./components/Lushen";
import Tesarion from "./components/Tesarion";
import Praha from "./components/Praha";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Monster Database Mock Up</h1>
        <div className="App-pool">
          <div className="App-btn">
            <Lushen />
          </div>
          <div className="App-btn">
            <Lushen />
          </div>
          <div className="App-btn">
            <Lushen />
          </div>
          <div className="App-btn">
            <Tesarion />
          </div>
          <div className="App-btn">
            <Lushen />
          </div>
          <div className="App-btn">
            <Praha />
          </div>
          <div className="App-btn">
            <Tesarion />
          </div>
          <div className="App-btn">
            <Tesarion />
          </div>
          <div className="App-btn">
            <Lushen />
          </div>
          <div className="App-btn">
            <Tesarion />
          </div>
          <div className="App-btn">
            <Tesarion />
          </div>
          <div className="App-btn">
            <Tesarion />
          </div>
          <div className="App-btn">
            <Tesarion />
          </div>
          <div className="App-btn">
            <Praha />
          </div>
          <div className="App-btn">
            <Praha />
          </div>
          <div className="App-btn">
            <Tesarion />
          </div>
        </div>
        <Menu />
        <img className="App-logo" src={logo} alt="logo" />
      </header>
    </div>
  );
}

export default App;
