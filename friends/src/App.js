import './App.css';
import React from 'react'
import Login from './components/Login'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth';



function App() {
const logout = () =>{
  axiosWithAuth()
  .post()
}

  return (
    <Router>
    <div className="App">
      <Link to='/login'> Login </Link>
      
    
    </div>
    </Router>
  );
}

export default App;
