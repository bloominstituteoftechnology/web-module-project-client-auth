import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import Logout from './components/Logout';

import PrivateRoute from './components/PrivateRoute';

function App() {
  let isLoggedIn = localStorage.getItem('token');

  return (
    <Router>
      <div className="App">

        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            {isLoggedIn && <Link to='/logout'>Logout</Link>}
          </li>
          
          <li>
            {isLoggedIn && <Link to='/protected'>Friends List</Link>}
          </li>
        </ul>

        <Switch>
          <PrivateRoute path='/protected' component={FriendsList} />
          <PrivateRoute path='/logout' component={Logout} />
          <Route path='/login' component={Login} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
