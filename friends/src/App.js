import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from './Components/PrivateRoute';
import Login from './Components/Login'
import FriendsList from './Components/FriendsList'

function App() {
  console.log(localStorage)

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  return (
    <div className="App">
      <Router>
        <Link to="/Login">
          Login
        </Link>
        <Link to="/FriendsList">
          Friends List
        </Link>
        <Link onClick={logout}>Logout</Link>
        {localStorage.getItem("token")?<Link to="/protected">Protected Page</Link>:<div>Please Log in</div>}

        <Switch>
          <Route path={'/Login'}>
              <Login />
          </Route>
          <PrivateRoute exact path={'/protected'}>
              <FriendsList />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
