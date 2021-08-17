import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute'
import {axiosWithAuth} from './utils/axiosWithAuth'

import './App.css';

function App() {
  const logout = () => {
    axiosWithAuth()
    .post('/logout')
    .then(res=>{
      localStorage.removeItem("token")
      window.location.href="/login"
    })
    .catch(err=>{
      console.log(err)
    })
  };
  return (
    <Router>
      <div className="App">
        <div className='Header'>
          <h1>friends!</h1>
            <Link to="/login">Login</Link>
            <Link onClick={logout}>Logout</Link>
            <Link to="/protected">Friends</Link>
        </div>
        <Switch>
          <PrivateRoute exact path="/protected" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
