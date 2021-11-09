import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Login from './components/Login';
import FriendsList from './components/FriendsList'
import Logout from './components/Logout'
import './App.css';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/logout'>Logout</Link>
        </li>
        <li>
          <Link to='/protected'>Friends</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path='/protected' component={FriendsList}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/login' component={Login}/>
        <Route path='/' component={Login}/>
      </Switch>
   
    </div>
    </Router>
  );
}

export default App;
