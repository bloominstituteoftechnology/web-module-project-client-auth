import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './Components/Login'
import FriendsList from './Components/FriendsList'

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/Login">
          Login
        </Link>
        <Link to="/FriendsList">
          Friends List
        </Link>
        <Switch>
          <Route path={'/Login'}>
              <Login />
          </Route>
          <Route path={'/FriendsList'}>
              <FriendsList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
