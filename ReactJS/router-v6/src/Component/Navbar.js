import React from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div>Navbar Page</div>
        <nav>
          <ul>
            <li>
              <Link to={`about`}>About</Link>
            </li>
            <li>
              <Link to={`store`}>Store</Link>
            </li>
            <li>
              <NavLink
                to="/child"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                  };
                }}
              >
                ChildHome
              </NavLink>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
