import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import FriendsList from "./components/FriendsList";
import Login from "./components/Login";
import Logout from "./components/Logout";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  let isLoggedIn = localStorage.getItem("token");

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>

        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <PrivateRoute path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
