import React, { useState } from "react";
import axios from "axios";

import axiosWithAuth from "../utils/axiosWithAuth";

const AddFriend = (props) => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };

  const addButton = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", newFriend)
      .then((res) => {
        props.setFriends((friends) => [...friends, newFriend]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="addFriendName">
      <form onSubmit={addButton}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newFriend.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={newFriend.age}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={newFriend.email}
            onChange={handleChange}
          />
        </label>

        <div className="button">
          <button>Add Friend</button>
        </div>
      </form>
    </div>
  );
};

export default AddFriend;
