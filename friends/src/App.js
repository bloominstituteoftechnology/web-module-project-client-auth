import './App.css';
import React from 'react'
// import Login from './components/Login'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth';



function App() {
const logout = () =>{
  axiosWithAuth()
  .post()
}

  return (
    <div className="App">
      <header className="App-header">
       Login
      </header>
    </div>
  );
}

export default App;
