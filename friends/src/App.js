import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Logout from './components/Logout';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const isLoggedin = localStorage.getItem("token");
  
  return (
    <Router>
     <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to='/logout'>Logout</Link>
        </li>
        <li>
          { isLoggedin && <Link to='/friends'>Friends</Link>}
        </li>
        <li>
          { isLoggedin ? <p className='welcome'>Welcome {localStorage.getItem("username")}</p> : <div></div>}
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path="/friends" component={Friends} />
        <PrivateRoute path='/logout' component={Logout} />
        <Route path='/login' component={Login} />
      </Switch>
     </div>
    </Router>
  );
}

export default App;
