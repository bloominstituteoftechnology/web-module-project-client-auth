import axios from 'axios'
import React, {useEffect, useState} from 'react'
import FriendsForm from '../Components/FriendsForm'

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
            
           

            <h1> Add A New Friend: </h1>
            <FriendsForm friends={friends} setFriends={setFriends}/>

        </div>
    )
}
