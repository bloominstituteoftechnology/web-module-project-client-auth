import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function FriendsList(props) {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                setFriends(res.data);
            })
            .catch(err => console.log({ err }));
    }, [])

    return (
        <div>
            <h3>Current Friends</h3>
            {friends.map(friend => (
                <>
                    <p key={friend.id}>{friend.name}</p>
                </>
            ))}
        </div>
    )
}

export default FriendsList;

