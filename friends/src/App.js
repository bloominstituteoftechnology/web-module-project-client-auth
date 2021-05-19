import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import { PrivateRoute } from "./utilities/PrivateRoute";
import "./App.css";

function App() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <Router>
      <div className="App">
        <nav className="App-header">
          <img
            className="logo"
            src="https://images.tbs.com/tbs/$dyna_params/https%3A%2F%2Fi.cdn.tbs.com%2Fassets%2Fimages%2F2019%2F08%2FFriends-Logo-900x153.png"
            alt="friends show logo"
          ></img>
          <Link className="App-link" to="/">
            Home
          </Link>
          <Link className="App-link" to="/login">
            Access Friends
          </Link>
          <Link className="App-link" onClick={logout}>
            Logout
          </Link>
        </nav>
        <Route path="/" />
        <Route path="/Login" component={Login} />
        <PrivateRoute path="/FriendsList" component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
