import React from "react";
import { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth().get("friends")
      .then(res => {
        console.log(res)
        setFriends(res.data)
      }).catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1>FriendsList Page</h1>
      <ul>
      {
        friends.map(elem => {
          return <li key={elem.id}>{elem.name} - {elem.age} - {elem.email}</li>
        })
      }
      </ul>
    </div>
  );
}

export default FriendsList;