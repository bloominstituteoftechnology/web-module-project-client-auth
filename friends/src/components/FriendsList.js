import axios from 'axios'
import { useState, useEffect } from 'react'
import { axiosWithAuth } from '../axiosAuth';
import Friend from './Friend';
import AddFriend from './AddFriend';

import { useHistory } from "react-router";

const FriendsList = () => {
    const [friends, setFriends] = useState([])

    const history = useHistory()
    const logOut = () => {
        localStorage.removeItem('authtoken')
        history.push('/login')
    }

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends').then(res => setFriends(res.data))
            .catch(err => console.log(err))
        return () => {
            console.log('cleanUp')
        }
    }, [])
    return (
        <div>
            <h1>Friends!</h1>
            {
                friends.map(el => <Friend data={el} />)
            }
            {/* {friends.map(friend => {
                <Friend friend={friend} />
            })} */}
            {/* <Friend /> */}
            <button onClick={logOut}>Log Out</button>
            <h1>Add Friend</h1>
            <AddFriend />
        </div>
    )
}

export default FriendsList;