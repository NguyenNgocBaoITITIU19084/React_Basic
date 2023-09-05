import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import SinglePost from "./components/SinglePost";

const App = () => {
  return (
    <div className="app">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/post/:id">Post by Id</Link>
            </li>
          </ul>
        </nav>
        <AddPost />
        <PostList />
        <Switch>
          <Route path="/post/:id">
            <SinglePost />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
