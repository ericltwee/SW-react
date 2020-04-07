import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Home";
import Onhover from "./worktable/onhover";
import Animate from "./worktable/animate";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/onhover1">
        <Onhover />
      </Route>
      <Route exact path="/animate2">
        <Animate />
      </Route>
    </div>
  );
}

export default App;
