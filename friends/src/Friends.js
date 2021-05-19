import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "./Auth";
import NewFriend from "./NewFriend";


const Friends = () => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() =>{
    axiosWithAuth()
    .get("http://localhost:5000/api/friends")
    .then((res) => {
      setFriendsList(res.data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <ul>
        {friendsList.map(friend => (
            <li>{friend.name}</li>))}
      </ul>
    <NewFriend/>
    </div>
  );
};

export default Friends;