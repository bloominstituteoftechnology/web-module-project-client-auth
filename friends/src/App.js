import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Login from "./Components/Login";
import Logout from "./Components/Logout";
import FriendsList from "./Components/FriendsList";

function App() {
  return (
    <Router>
      <div className="head">
        <ul>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/logout">Log Out</Link>
          </li>
          <li>
            <Link to="/friendslist">Friends List</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/friendslist" component={FriendsList} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
