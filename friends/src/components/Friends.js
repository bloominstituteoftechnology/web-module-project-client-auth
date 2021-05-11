import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

const newFriendObject = [
  {
    id: Date.now(),
    username: "",
    age: "",
    email: "",
  },
];

function Friends() {
  const [friends, setFriends] = useState([]);
  const [friend, setfriend] = useState(newFriendObject);

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

  return (
    <div className="friends-container">
      <ul className="friends-list">
        <li className="friends">
          {friends.map((friend) => {
            return newFriendObject;
          })}
        </li>
      </ul>
    </div>
  );
}

export default Friends;
