import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import FriedsList from './components/FriendsList'
import NewFriend from './components/NewFriend'
import { axiosWithAuth } from './components/axiosWithAuth';

function App() {
  const logout = () => {
    axiosWithAuth()
    .post('api/logout')
    .then(response => {
      localStorage.removeItem('token')
      window.location.href = '/login'
    })
    .catch(error => {
      console.log(error);
    })
  }
    
  return (
    <Router>
    <div className = 'App'>
      <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path = '/protected'>
            <NewFriend />
            <FriedsList />
          </PrivateRoute>
          <Route exact path = '/login' component = {Login} />
          <Route component = {Login} />
        </Switch>
    </div>
    </Router>
  )
}

export default App;
