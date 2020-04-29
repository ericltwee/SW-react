import React from "react";
import "./styling/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Pool from "./components/pool";
import Menu from "./components/menu";
import Monster from "./components/pool2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-title">Monster Database Mock Up</p>
        <Monster />
        <Pool />

        {/* <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          new tab
        </a> */}
        <Menu />
      </header>
    </div>
  );
}

export default App;
