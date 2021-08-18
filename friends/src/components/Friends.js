import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const Friends = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        getFriends()
    }, [])

    const getFriends = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => setFriends(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            {friends.map(friend => {
                return(
                    <div>
                        <h2>{friend.name}</h2>
                        <h3>{friend.age}</h3>
                        <p>{friend.email}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Friends