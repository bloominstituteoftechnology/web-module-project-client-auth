import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import Friend from './Friend';



const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        console.log('FriendList.js ln:9 useEffect Fired');
        getData();
    }, [])

    const getData = () => {
        console.log('FriendsList.js ln:16 getData friends:', friends);
        axiosWithAuth()
            .get("/friends")
            .then((res) => {
                console.log('FriendsList.js ln:17 res.data: ', res.data);
                setFriends(
                    res.data
                );
                console.log('This is getData res.data: ', res.data);
            })
    }

    return (
        <div className="friends-container">
            {
                friends.map(friend => {
                    return <Friend key={friend.id} friend={friend} />
                })
            }
        </div>
    )
}

export default FriendsList
