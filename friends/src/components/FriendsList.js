import React, { useState } from 'react';
import axiosWithAuth from '../helpers/axiosWithAuth';

const FriendsList = () => {
    const [friendsList, setFriendsList] = useState([]);

    axiosWithAuth().get("/friends")
      .then(res => setFriendsList(res.data))
      .catch(err => console.log(err))



        return (
            <div>
                <header>Friends List:</header>
                <div>-------------------------</div>
                <div>
                    {friendsList.map(friend => (
                        <div key = {friend.id}>
                            <div>Friend: {friend.name}</div>
                            <div>Age: {friend.age}</div>
                            <div>Email: {friend.email}</div>
                            <div>-------------------------</div>
                        </div>
                    ))}
                </div>
            </div>
        )
}

export default FriendsList;
