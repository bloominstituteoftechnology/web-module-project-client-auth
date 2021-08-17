import React from "react";
import PrivateRoute from "./components/PrivateRoute.js";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import LogIn from "./components/LogIn";
import Friends from "./components/Friends";
import './App.css';
import axiosWithAuth from "./utils/axiosWithAuth";

function App() {
  const logout = () => {
    console.log("LOGOUT");
    
    axiosWithAuth()
      .post("/api/logout")
      .then(res => {
        localStorage.removeItem("token");
        localStorage.removeItem("role", res.data.role);
        localStorage.removeItem("username", res.data.username);
        window.location.href = "LogIn";
      })

      .catch(err =>{
        console.log(err)
      })

  }
  

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path = "/protected" component = {Friends}/>
        <Route path = "/login" component = {LogIn}/>
        <Route path = "/" component = {LogIn}/>

        <div className = "App">
          <header>
            <h1> FRIEND LIST</h1>

            <Link to = "/login"> LOG THIS</Link>

            <Link onClick = {logout}> LOGOUT </Link>
            

          </header>
        </div>
      </Switch>
    </Router>
    
    
  );
}

export default App;

