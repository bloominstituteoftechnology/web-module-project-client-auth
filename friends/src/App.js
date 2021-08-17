import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import Logout from './components/Logout';
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
            <button>
              <Link to="/login">Login</Link>
            </button>
            <button>
              <Link to="/logout">Logout</Link>
            </button>
          
            <button>
              <Link to="/protected">Friends List</Link>
            </button>
        </ul>
        <Switch>
          <Route exact path="/protected" component={FriendsList} />
          <PrivateRoute path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
