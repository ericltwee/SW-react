import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Home";
import Onhover from "./worktable/onhover";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/onhover1">
        <Onhover />
      </Route>
    </div>
  );
}

export default App;
