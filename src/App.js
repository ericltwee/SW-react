import React from "react";
import "./styling/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/menu";
import Monster from "./components/pool2";

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
      </header>
    </div>
  );
}

export default App;
