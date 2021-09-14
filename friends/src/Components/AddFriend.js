import React, { useState } from "react";
import axios from "axios";

const AddFriend = (props) => {
  const [newFriend, setNewFriend] = useState({
    id: Date.now(),
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
