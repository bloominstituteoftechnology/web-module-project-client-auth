import React, { useEffect, useState } from 'react';
import makeRequest from '../Api';
import Friend from './Friend';

export default function FriendsList() {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        makeRequest().get("/api/friends")
            .then(res => {
                console.log(res.data)
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <h1>Friends</h1>
            <ul>
                {friends.map(friend => 
                    <Friend friend={friend} key={friend.id}/>    
                )}
            </ul>
        </>
    )
}
