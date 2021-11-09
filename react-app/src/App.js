
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Login from './components/Login';
import Logout from './components/Logout';
import FriendsList from './components/FriendsList';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
          <li>
            <Link to ="/login">Login</Link>
          </li>
          <li>
            <Link to = '/logout'>Logout</Link>
          </li>
          <li>
            {localStorage.getItem("token") && <div>
              <Link to="/protected">Protected Page</Link>
            </div>
            }
          </li>

      </ul>

      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <PrivateRoute path="/logout" component={Logout} />
        <Route path ='/login' component = {Login} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
