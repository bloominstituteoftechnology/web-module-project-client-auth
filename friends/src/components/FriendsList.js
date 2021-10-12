import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import AddFriendForm from './AddFriendForm';
import Friend from './Friend';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res.data)
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <div>
                <AddFriendForm setFriends={setFriends}/>
            </div>
            <div>
                {friends.map((friend) => (
                    <Friend key={friend.id} friend={friend}/>))
                }
            </div>
        </div>
    );
};

export default FriendsList;