
import React from 'react'
import axios from 'axios';
import '../styles/nav.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../components/ProtectedRoute'
import Friends from './Friends';
import Login from './Login';


export default function Nav() {


 const logout = () => {
        axios.post("http://localhost:5000/api/logout")
          .then(res => {
            console.log("Logged out!");
            localStorage.removeItem('token');
            window.location.href = "/";
        })
      };

    return (
<Router>
        <nav className='navbar-items'>
            <ul>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/protected'>Friends</Link></li>
                <li><Link onClick={logout}>Friends</Link></li>
            </ul>
            <Switch>
          <ProtectedRoute exact path="/protected" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
        </nav>
</Router>
    )
}