import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const FriendsList = () => {

    const [friends, setFriends] = useState([])
   


    useEffect(() => {
        axiosWithAuth()
        .get(`http://localhost:5000/api/friends`)
        .then(res => {
            setFriends(res.data)
        }).catch(err => {
            console.error(err)
        })
    }, [])
        
    return (
        <div>
            {
                friends.map(friend => {
                    return <div>
                        <h1>{friend.name}</h1>
                        <p>{friend.email}</p>
                        <p>{friend.age}</p>
                         </div>
                            
                })
            }
        </div>
    )
}


export default FriendsList
