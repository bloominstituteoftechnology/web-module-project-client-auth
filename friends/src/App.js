import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Header from './components/Header'

import Login from './components/Login';
import Logout from './components/Logout';


function App() {

  
  
  return (
    <Router>

      <div className="App">
      <Header /> 
        <h1> hi </h1>
          
        <Routes>
          <Route path="/login" element={ <Login />} />
          <Route path="/logout" element={ <Logout />} />
        </Routes>       
      </div>
    </Router>
  );
}
export default App;