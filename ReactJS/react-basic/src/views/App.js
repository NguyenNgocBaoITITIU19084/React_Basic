import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MyComponent from "./examples/MyComponent";
import ClickMeComponent from "./examples/ClickMeComponent";
import FormComponent from "./examples/FormComponent";
import Navbar from "../components/Navbar.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/home" exact>
            <p>Home Page</p>
          </Route>
          <Route path="/my-component">
            <MyComponent />
          </Route>
          <Route path="/click-me">
            <ClickMeComponent />
          </Route>
          <Route path="/about">
            <FormComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
