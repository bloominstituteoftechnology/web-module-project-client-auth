import React, { useState, useEffect } from "react";
// import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

const newFriendObject = [];

// const initialFriend = [
//   {
//     id: 1,
//     username: "Joe",
//     age: 24,
//     email: "joe@lambdaschool.com",
//   },
// ];
function Friends() {
  const [friends, setFriends] = useState(newFriendObject);
  const [newFriend, setNewFriend] = useState(newFriendObject);
  const [loading, setLoading] = useState(true);

  const getFriends = () => {
    axiosWithAuth()
      .get("/api/friends", {
        header: {
          authorization: window.localStorage.getItem("token"),
          // Authorization: JSON.stringify(window.localStorage.getItem("token")),
        },
      })
      .then((res) => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log("Error:", err.response.statusText);
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
    console.log(newFriend);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends/", newFriend)
      .then((res) => {
        console.log(res.data);
        // setFriends({
        //   ...friends,
        //   newFriend,
        // });
        setLoading(false);
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
          {friends.map((friend) => {
            return (
              <div key={friend.id}>
                <h3>{friend.name}</h3>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
              </div>
            );
          })}
        </ol>
        <ol className="friends-list">
          {loading === false ? (
            <div key={newFriend.id}>
              <h3>{newFriend.name}</h3>
              <p>Age: {newFriend.age}</p>
              <p>Email: {newFriend.email}</p>
            </div>
          ) : (
            <p>Friends are loading...</p>
          )}
        </ol>
      </div>
    </div>
  );
}

export default Friends;
