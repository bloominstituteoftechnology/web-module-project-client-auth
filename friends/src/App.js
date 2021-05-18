import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {

  const logout = () => {
    localStorage.removeItem('token')
  };

  return (
    <Router>
      <div className='App'>
        <h1> Friends!</h1>
        <img src = "https://img.cinemablend.com/filter:scale/cb/b/c/4/1/0/f/bc410fd5562fbd81daeaab720c73739c7748e8083ce61a6ef55da164bcb6a3c1.jpg?mw=600"/>
        <div>
        <Link to="/Login">Login</Link>
        </div>

        <div className = "log">
        {localStorage.getItem('token') && <Link to="/protected"/>}
        <Link onClick={logout}>Logout</Link>
        </div>

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