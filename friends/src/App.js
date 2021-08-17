import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import Logout from './components/Logout';
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

import './App.css';

  function App() {
    // const logout = () => {
    //   axiosWithAuth()
    //     .post("/logout")
    //     .then((res) => {
    //       localStorage.removeItem("token");
    //       console.log('Logout Res Data Here:', res);
    //       console.log("HERE IS WINDOW",window);
    //       window.location.href = "/login";
    //     })
    //     .catch((err) => console.log(err));
    // };

    return (
      <Router>
        <div className="App">
          <ul>
            
              <button>
              <Link to="/login">Login Page</Link>
              </button>
              <button>
              <Link to="/logout">Logout</Link>
              </button>
            
              <button>
              <Link to="/protected">Friends List</Link>
              </button>
              
            
          </ul>
          <Switch>
            <PrivateRoute exact path="/protected" component={FriendsList} />
            <PrivateRoute path="/logout" component={Logout} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
  

export default App;
