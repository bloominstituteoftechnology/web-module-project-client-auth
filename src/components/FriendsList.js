import React, { useEffect, useState } from "react";
import axios from "axios";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>FRIENDS LIST</h1>
      <ul>
        {friends.map((friend, idx) => {
          return (
            <li key={idx}>
              {friend.name}-{friend.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendsList;
