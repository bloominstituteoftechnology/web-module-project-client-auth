import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {axiosWithAuth} from '../components/axiosWithAuth'
import FriendsForm from '../components/friendform.js'

export default function FriendsList() {
    const [friends, setFriends] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchMyFriendsList = () =>{
        setIsLoading(true)

        axiosWithAuth().get('http://localhost:5000/api/friends',{
            headers: {
                authorization:localStorage.getItem('token')
            }
        })
        .then((resp)=>{
            setFriends(resp.data)
            setIsLoading(false)
                })
        .catch((err)=>{
            console.log(err.response)
            setIsLoading(false)
        })

    }

    useEffect(()=>{
        fetchMyFriendsList();
    },[])

    return (
        <div>
            <h1>You're Logged in! Here are your friends:</h1>
            {isLoading ? <h1>Loading Friends...</h1> : friends.map((friend)=>{
                return (<h4>{friend.name}</h4>)
            })}

            <h1> Add A Friend</h1>
            <FriendsForm fetchMyFriendsList={fetchMyFriendsList}/>
        </div>
    )
}