import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axiosWithAuth from './utils/axiosWithAuth';

import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import FriendList from './components/FriendList'; 
import FriendForm from './components/FriendForm';

import './App.css';

function App (props) {
  // const logout = () => {
  //   const token = localStorage.getItem("token")
  //   axiosWithAuth()
  //     .post("/api/logout")
  //     .then(res => {
  //       localStorage.removeItem("token");
  //       window.location.href = "/login";
  //       this.setState({
  //         isAuth: false
  //       })
  //     })
  //     .catch(err=>{
  //       console.log(err);
  //     })
  // };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <h1>Module Project - Authentication</h1>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            {/* <Link onClick={logout}>Logout</Link> */}
            <Link>Logout</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
        </ul>
        </header>

        {/* <h3>Module Project - Authentication</h3> */}
        {/* <Login /> */}
        <Switch>
          <Route path="/login" component={Login} />
          <Route component={Login} />
          {/* <PrivateRoute exact path="/friends" component={FriendList} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
