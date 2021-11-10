import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import Friends from "./components/Friends";
import Logout from "./components/Logout";


function App() {
  const isLoggedIn = localStorage.getItem('token');
  const username = localStorage.getItem('username');

  return (
    <Router>
    <div className="App">
      <ul>  
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            {isLoggedIn && 
            <div>
            <Link to="/protected">Protected Page</Link>
            <p>Welcome to the page:</p> 
            <Friends />
            </div>}
          </li>
      </ul>
   
    <Switch>
          <Route exact path="/protected" component={Friends} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />    
        </Switch>
      </div>
    </Router>
  );
}

export default App;
