import React from 'react'
import Login from './components/login/Login'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import PrivateRoute from './components/privateRoute/PrivateRoute'
import FriendsPage from './components/friendsPage/FriendsPage'
import Logout from './components/logout/Logout'
import './App.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function App() {
  const isLoggedIn = localStorage.getItem('token')


  return (
    <Router>
    <div className="App">
    <div className="nav">
      <Nav isLoggedIn={isLoggedIn} />
      </div>
      <div className="container">
      <div className="main"></div>
    </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <PrivateRoute exact path='/protected' component={FriendsPage} />
    </Switch>
    </div>
    
    </Router>
  );
}

export default App;
