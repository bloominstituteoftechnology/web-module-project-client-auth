import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/LogIn';
import FriendsList from './components/FriendsList';
import axios from 'axios';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const logout = () => {
    axios.post("http://localhost:5000/api/logout")
      .then(res => {
        console.log("Logged out!");
        localStorage.removeItem('token');
        window.location.href = "/";
    })
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
            <Link to="/protected">Friends Page</Link>
          </li>
        </ul>
        <Switch>
          <ProtectedRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
