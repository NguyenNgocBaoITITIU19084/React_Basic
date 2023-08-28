import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

class Home extends React.Component {
  render() {
    return (
      <>
        <div>Home Page</div>
        <Navbar />
        <div id="child">
          <Outlet />
        </div>
      </>
    );
  }
}

export default Home;
