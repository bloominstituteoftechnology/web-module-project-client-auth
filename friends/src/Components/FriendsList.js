import React, { useState, useEffect } from "react";
// import Loader from 'react-loader-spinner';

import axiosWithAuth from "../utils/axiosWithAuth";
import Friend from "./Friend";
import AddFriend from "./AddFriend";

import "../App.css";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="friendsList">
      <div className="addFriend">
        <AddFriend setFriends={setFriends} />
      </div>
      <div className="friend">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
