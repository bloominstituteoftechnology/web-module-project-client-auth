import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

import './App.css';

  function App() {
    const logout = () => {
      axiosWithAuth()
        .post("/logout")
        .then((res) => {
          localStorage.removeItem("token");
          // console.log(window);
          window.location.href = "/login";
        })
        .catch((err) => console.log(err));
    };

    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link onClick={logout}>Logout</Link>
            </li>
            <li>
              <Link to="/protected">Friends List</Link>
            </li>
          </ul>
          <Switch>
            <PrivateRoute exact path="/protected" component={FriendsList} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
  

export default App;
