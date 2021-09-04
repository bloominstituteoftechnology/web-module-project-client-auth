import axios from 'axios'
import { useState, useEffect } from 'react'
import { axiosWithAuth } from '../axiosAuth';
import Friend from './Friend';
import AddFriend from './AddFriend';
import '../App.css'

import { useHistory } from "react-router";

const FriendsList = () => {
    const [friends, setFriends] = useState([])

    const history = useHistory()
    const logOut = () => {
        localStorage.removeItem('authtoken')
        history.push('/login')
    }

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends').then(res => setFriends(res.data)
        )
            .catch(err => console.log(err))
        return () => {

        }
    }, [])
    return (
        <div>
            <h1>Friends!</h1>
            {friends.length === 0 ? <div className="loader"></div> : <div>done loading</div>}
            {
                friends.map(el => <Friend data={el} key={el.id} />)
            }
            <button onClick={logOut}>Log Out</button>
            <h1>Add Friend</h1>
            <AddFriend />
        </div>
    )
}

export default FriendsList;