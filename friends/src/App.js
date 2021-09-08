import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import {axiosWithAuth} from './axiosWithAuth/axiosWithAuth';

function App() {
  
  const logout = () => {
    axiosWithAuth()
    .post('/logout')
    .then(res => {
      localStorage.removeItem("token")
      window.location.href="/login"
    })
    .catch(err => {
      console.log(err)
    })
  };

  return (

<Router>
  <div className="app">
    <div className="header">
      <h1>Friend Finder</h1>
      <Link to="/login">Login</Link>
      <Link onClick={logout}>Logout</Link>
      <Link to="/protected">Find Friends</Link>
    </div>
    <Switch>
      <Route path="/login" component={Login} />
      <Route component={Login} />
      <PrivateRoute exact path="/protected" component={FriendsList} />
    </Switch>
  </div>
</Router>
  );
};

export default App;
