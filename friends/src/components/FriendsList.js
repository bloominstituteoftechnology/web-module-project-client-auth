import React, { useState, useEffect } from "react";

import axiosWithAuth from "../utills/axiosWithAuth";
import Friend from "./Friend";

function FriendsList(props) {
  const [ friends, setFirends ] = useState([])

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        console.log(res)
        setFirends(res.data);
      })
      .catch((err) => console.log({err}));
  }, []);

  return (
    <div>
      <h2>Friends Stuff</h2>
      {friends.map((friend) => {
        return <Friend key={friend.id} friend={friend} />
      })}
    </div>
  );
}

export default FriendsList;