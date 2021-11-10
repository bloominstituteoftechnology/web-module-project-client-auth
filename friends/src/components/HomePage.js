import React, { useEffect, useState } from 'react'
import axios from 'axios'
import axiosWithAuth from '../api'
import Friend from './Friend'
import { useHistory } from 'react-router'

const HomePage = () => {
    const [friends, setFriends] = useState([])
    const history = useHistory()

    useEffect(()=> {
        axiosWithAuth().get('/friends')
        .then(res=>{
            setFriends(res.data)
            
            
        })
        .catch(err=> {
            console.error(err)
        })
    }, [])
    
    const handleLogOut = () => {
        localStorage.removeItem('token')
        history.push('/login')
      }

    const addFriend = ()=> {
        history.push('/addFriend')
    }
    return (
        <div>
            <h2>List Of Friends</h2>
           {
               friends.map(friend=>{
                   return <Friend friend={friend} key ={friend.id}/>
               })
           }
           <button onClick={addFriend}>add new friend</button>
            <button onClick={handleLogOut}>logout</button>
        </div>
    )
}

export default HomePage
