import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";

import "./App.css";
import Login from "./components/Login";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const logout = () => {
    window.localStorage.removeItem("token");
  };
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link onClick={logout} to="/login">
            Logout
          </Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path="/protected" component={Friends} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
