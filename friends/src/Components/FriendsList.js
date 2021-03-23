import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default function FriendsList() {
    const [friends, setFriends] = useState([])

    const fetchMyFriendsList = () =>{
        axios.get('http://localhost:5000/api/friends',{
            headers: {
                authorization:localStorage.getItem('token')
            }
        })
        .then((resp)=>{
            console.log(resp.data)
            setFriends(...friends, resp.data)

        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    useEffect(()=>{
        fetchMyFriendsList();
    },[])

    return (
        <div>
            <h1>You're Logged in! Here are your friends:</h1>
            {friends.map((friend)=>{
                return (<h2>{friend.name}</h2>)
            })}

        </div>
    )
}
