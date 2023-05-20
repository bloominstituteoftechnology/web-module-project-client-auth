import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch, Link, Navigate} from 'react-router-dom';


import Login from './components/Login';
import FriendList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {

  return (
    <div className="App">
      <header className="App-header">
          <h2>Friends Database</h2>
            <Link 
              className="App-link"
              to="login">
              Login
            </Link>
            <Link 
              className="App-link"
              to="friends">
                Friends List
            </Link>
            <Link 
              className="App-link"
              to="friends/add">
                Add Friends
            </Link>
            <Link 
              className="App-link"
              to="friends">
                Logout
            </Link>         
        </header>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Navigate to="/"/>}/>
          <Route path="/friends" element={<FriendList/>}/>
          <Route path="/friends/add" element={<AddFriend/>}/>
      </Routes>
    </div>
  );
}

export default App;
