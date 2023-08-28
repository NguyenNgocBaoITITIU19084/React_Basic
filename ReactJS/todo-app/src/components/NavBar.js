import React from "react";
import "../styles/NavBar.scss";
import { NavLink } from "react-router-dom";
class NavBar extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <a class="active" href="/home">
              Home
            </a>
          </li>
          <li>
            <a href="/todo">Todo</a>
          </li>
        </ul>
      </>
    );
  }
}

export default NavBar;
