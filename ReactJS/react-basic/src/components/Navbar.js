import React from "react";
import { NavLink, Link } from "react-router-dom";

import "../styles/navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/my-component">MyComponent</NavLink>
          </li>
          <li>
            <NavLink to="/click-me">Click Me</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </>
    );
  }
}

export default Navbar;
