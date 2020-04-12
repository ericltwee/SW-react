import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Form, NavbarBrand, NavLink } from "react-bootstrap";
import "./onhover.css";

const Color = (props) => {
  const styling = {
    flexDirection: "row",
    backgroundColor: "blue",
    justifyContent: "center",
  };

  return (
    <div>
      <div style={styling}>
        <div className="box">Header</div>
        <div className="box">Sidebar</div>
        <div className="box">Content</div>
        <div className="box">Footer</div>
      </div>
      <div>mock template</div>
    </div>
  );
};

export default Color;
