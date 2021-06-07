import React from 'react';
// import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import NavBar from './components/NavBar';
import Login from './components/Login';
import Home from './components/Home';
import FriendsList from './components/FriendsList';

import './App.css';
function App() {

  const logout = () => {
    localStorage.removeItem('token')
  };
  // const history = useHistory();

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="log">
          {localStorage.getItem('token') && <Link to="/protected" />}
        </div>
        <Switch >
          <Route path='/' component={Home} />
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path='/login' component={Login} />
        </Switch>
        <Link onClick={logout}>Logout</Link>
      </div>
    </Router>
  );
}

export default App;
