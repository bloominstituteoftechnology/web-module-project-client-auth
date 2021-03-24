import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Friends from './components/Friends';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { axiosWithAuth } from './utils/axiosWithAuth';

function App() {
  const logout = () => {
    
    axiosWithAuth()
    //1. do a request to our server to delete the token
    .post('/api/logout')
    .then(res => {
      //2. remove our local token
      localStorage.removeItem('token');
      //3. redirect to login page
        window.location.href = '/login';
      })
      .catch(err => {
        console.log(err.response);
    });
  };


  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
             <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            {localStorage.getItem('token') && <Link to="/protected">Protected Page</Link>}
          </li>
        </ul>
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
