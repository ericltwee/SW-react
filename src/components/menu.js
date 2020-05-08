import React from "react";
import Upload from "./Upload.js";
import "../styling/main.scss";

function Menu() {
  return (
    <div className="menuBox">
      <i className="fas fa-filter fa-3x"></i>
      <i className="fas fa-sort-amount-down fa-3x"></i>
      <i className="fas fa-sort-amount-up fa-3x"></i>
      <i className="fas fa-search fa-3x"></i>
      <Upload />
    </div>
  );
}

export default Menu;
