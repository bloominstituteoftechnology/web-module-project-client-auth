import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../Utils/axiosWithAuth';
import Friend from './Friend';

const FriendsList = () => {
    const [friendsList, setFriendsList] = useState([])
    console.log(friendsList)

    useEffect(()=>{
        getFriendsData()
      }, []);

    const getFriendsData = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                setFriendsList(...friendsList, res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <div>
                <h2>Friends List</h2>
            </div>
            <div className="friendsList">
                {friendsList.map((friend) => {
                    return (
                        <Friend key={friend.id} friend={friend} />
                    )
                })}
            </div>
        </div>
    )
}

export default FriendsList