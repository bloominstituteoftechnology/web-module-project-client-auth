import React from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* <li>
            <Link onClick={logout}>Logout</Link>
          </li> */}
          <li>
            <Link to="/friends">Friends</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/friends" component={FriendsList} />

          {/* <PrivateRoute exact path="/friends" component={FriendsList} /> */}
          <Route path="/login" component={Login} />
        </Switch>
        <>
        </>
      </div>
    </Router>
  );
}

export default App;
