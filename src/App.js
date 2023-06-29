import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";
import AddFriends from "./components/AddFriends";

function App() {
  return (
    <div className="App">
      <nav>
        <Link className="heading" to="/">
          Friends Database
        </Link>
        <ul className="links">
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to="/friends/app">Add Friends</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/friends" element={<FriendsList />} />
        <Route path="/friends/add" element={<AddFriends />} />
      </Routes>
    </div>
  );
}

export default App;
