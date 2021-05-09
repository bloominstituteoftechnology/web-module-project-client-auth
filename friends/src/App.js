import React from 'react'
import './App.css';
import Login from './components/Login'
import Nav from './components/Nav'
function App() {
  return (
    <div className="App">
      <header>
      <Nav />
      </header>
      <Login />
    </div>
  );
}

export default App;
