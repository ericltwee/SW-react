import React from "react";
import logo from "./spin.png";
import "./App.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to my react playground</p>
        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          new tab
        </a>
        <a className="hover" href="/onhover1">
          Test 1 : on hover
        </a>
        <a className="animate" href="/animate2">
          Test 2 : animate
        </a>
        <a className="pageslide" href="/fullpage3">
          Test 3 : Fullpageslide
        </a>
        <a className="color" href="/color4">
          Test 4 : Color
        </a>
      </header>
    </div>
  );
}

export default Home;
