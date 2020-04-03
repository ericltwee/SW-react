import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Form, NavbarBrand, NavLink } from "react-bootstrap";
import "./onhover.css";

const Onhover = props => {
  return (
    <div className="navContainer">
      <Navbar expand="lg">
        <NavbarBrand href="/">Vegetables</NavbarBrand>
        <Form>
          <NavLink className="btn" href="/">
            Carrot
          </NavLink>
        </Form>
        <Form>
          <NavLink className="navtabs" href="/">
            potato
          </NavLink>
        </Form>
        <Form>
          <NavLink className="navtabs" href="/">
            Cabbage
          </NavLink>
        </Form>
        <Form>
          <NavLink className="navtabs" href="/">
            Cauliflower
          </NavLink>
        </Form>
        <Form></Form>
      </Navbar>
    </div>
  );
};

export default Onhover;
