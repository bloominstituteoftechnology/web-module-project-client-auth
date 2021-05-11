import React, { useState } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  // const getFriends = () => {
  axiosWithAuth()
    .get("/api/friends")
    .then((res) => {
      console.log(res.data);
      setFriends({
        ...friends,
        [friends]: friends,
      });
    })
    .catch((err) => {
      console.log();
    });
  // };

  const formatFriends = () => {
    const formattedFriends = [];
    friends.forEach((friend, index) => {
      formattedFriends.push({
        id: index,
        name: friend.name,
        age: friend.age,
        email: friend.email,
      });
    });
    return formattedFriends;
  };

  return (
    <div className="friends-container">
      <ul className="friends-list">
        <li className="friends">
          {friends.map((friend) => {
            return <p>{formatFriends()}</p>;
          })}
        </li>
      </ul>
    </div>
  );
};
export default Friends;
