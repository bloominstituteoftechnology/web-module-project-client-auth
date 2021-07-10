import React, { useState, useEffect}  from 'react';

import axiosWithAuth from '../helpers/axiosWithAuth';

const FriendsList = () => {

const [friendsList, setFriendsList] = useState([])

useEffect(() =>{
  axiosWithAuth().get("/friends")
    .then(res => {
      console.log(res.data)
      setFriendsList(res.data)
    })
    .catch(err => console.log(err));
},[]); 

  return(
    <div>
      <h2>Your Friends</h2>
      {friendsList.map(friend => (
        <div key={friend.id}>
          <p>{friend.name}</p>
        </div>
      ))}
      <button>Add a Friend</button>
    </div>
  )
};

export default FriendsList;