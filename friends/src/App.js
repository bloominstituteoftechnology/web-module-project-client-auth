import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './Components/Login';
import FriendsList from './Components/FriendsList';
import PrivateRoute from './Components/PrivateRoute';
import './App.css';

function App() {

  const logout = () => {
    localStorage.removeItem('token')
  };

  return (
    <Router>
      <div className='App'>
        <h1> Friends</h1>
        <div>
        <Link to="/Login">Login</Link>
        </div>
        {localStorage.getItem('token') && <Link to="/protected">Friends List</Link>}
        <Link onClick={logout}>Logout</Link>
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
