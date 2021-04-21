import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";


function App() {
  const logout = () => {
    // request to /api/logout
    window.localStorage.removeItem("token");
  };
return (
  <Router>
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
          <Link to="/friends">List of Friends</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/login" component={Login} />
        <Route render={(props) => <Login {...props} />} />
      </Switch>
    </div>
  </Router>
);
}

export default App;