import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";

import "./App.css";

import Login from "./Components/Login";
import Logout from "./Components/Logout";
import FriendsList from "./Components/FriendsList";

function App() {
  return (
    <Router>
      <div className="head">
        <div>
          <Link to="/login">Log In</Link>
        </div>
        <div>
          <Link to="/logout">Log Out</Link>
        </div>
        <div>
          <Link to="/friendslist">Friends List</Link>
        </div>
      </div>
      <div>
        <Switch>
          <ProtectedRoute path="/friendslist" component={FriendsList} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
