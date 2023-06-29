import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";
import AddFriends from "./components/AddFriends";
import Logout from "./components/Logout";

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
            <Link to="/friends/add">Add Friends</Link>
          </li>
          <li>
            <Link to="/logout/">Logout</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/friends" element={<FriendsList />} />
        <Route path="/friends/add" element={<AddFriends />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
