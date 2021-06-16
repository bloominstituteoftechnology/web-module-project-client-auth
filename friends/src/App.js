import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axiosWithAuth from './utils/axiosWithAuth';

import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import FriendList from './components/FriendList'; 
import FriendForm from './components/FriendForm';

import './App.css';

function App (props) {

  const logout = () => {
    localStorage.removeItem("token");
  };

  const isAuth = localStorage.getItem("token");

  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <h1>Module Project - Authentication</h1>
        <ul>
          <li>
            {/* {!isAuth ? <Link to="/login">Login</Link> : <div></div>} */}
            <Link to="/login">Login</Link>
          </li>
          <li>
            {!isAuth ? <Link to="/friends">Friends</Link> : <div></div>}
          </li>
          <li>
            {!isAuth ? <Link to="/friends/form">Friends Form</Link> : <div></div>}
            {/* <Link to="/friends/form">Friends Form</Link> */}
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
        </ul>
        </header>

        <Switch>
          <PrivateRoute exact path="/friends/form" component={FriendForm} />
          <PrivateRoute exact path="/friends" component={FriendList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
