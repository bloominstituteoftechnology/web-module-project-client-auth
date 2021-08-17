import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Login from './Components/Login';
import Logout from './Components/Logout';
import Friends from './Components/Friends';
import PrivateRoute from './Components/PrivateRoute'


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
            {localStorage.getItem('token') && <div>
              <Link to='/protected'>Friends Page</Link>
            </div>}
          </li>
        </ul>

        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/logout' component={Logout}/>
          <PrivateRoute exact path='/protected' component={Friends}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
