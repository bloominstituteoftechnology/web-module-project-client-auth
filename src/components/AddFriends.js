import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddFriends = () => {
  const navigate = useNavigate();
  const [newFriend, setNewFriend] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/friends", newFriend, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => navigate("/friends"))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form on onSubmit={handleSubmit}>
        <div className="inputs">
          <h1>ADD FRIEND</h1>
          <label htmlFor="friendName">FRIEND NAME</label>
          <input onChange={handleChange} type="text" id="name" name="name" />
          <label htmlFor="friendEmail">FRIEND AGE</label>
          <input type="number" id="age" name="age" onChange={handleChange} />

          <label htmlFor="friendEmail">FRIEND EMAIL</label>
          <input
            type="email "
            id="email"
            name="email"
            onChange={handleChange}
          />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddFriends;
