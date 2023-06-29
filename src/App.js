import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import LoginForm from "./components/LoginForm";
// import FriendsList from "./components/FriendsList";
// import AddFriends from "./components/AddFriends";

function App() {
  console.log("help");
  const LoginForm = () => {
    return (
      <div>
        <h1>Login</h1>
      </div>
    );
  };
  const FriendsList = () => {
    return (
      <div>
        <h1>Friends List</h1>
      </div>
    );
  };
  const AddFriends = () => {
    return (
      <div>
        <h1>Add Friends</h1>
      </div>
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/friends" element={<FriendsList />} />
        <Route path="/friends/add" element={<AddFriends />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
