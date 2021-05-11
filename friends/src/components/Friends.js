import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

const newFriendObject = [];

function Friends() {
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState(newFriendObject);

  const getFriends = () => {
    axiosWithAuth()
      .get("/api/friends", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getFriends();
  }, []);

  const handleChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends/:id", newFriend)
      .then((res) => {
        console.log("new friend:", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Enter Your People</h2>
      <form className="friend-form" onSubmit={handleSubmit}>
        Name:
        <input
          type="text"
          name="name"
          value={newFriend.name}
          onChange={handleChange}
          placeholder="Friend's name"
        />
        Age:
        <input
          type="number"
          name="age"
          value={newFriend.age}
          onChange={handleChange}
          placeholder="Friend's age"
        />
        Email:
        <input
          type="text"
          name="email"
          value={newFriend.email}
          onChange={handleChange}
          placeholder="Friend's email"
        />
        <button className="submit">Add Friend</button>
      </form>
      <div className="friends-container">
        <ol className="friends-list">
          <li className="friends">
            {friends.map((friend) => {
              return (
                <div key={friend.id}>
                  <h3>{friend.name}</h3>
                  <p>{friend.age}</p>
                  <p>{friend.email}</p>
                </div>
              );
            })}
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Friends;
