import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Friend from './Friend'
import AddFriend from './AddFriend'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const Friends = (props) => {

    const [friendslist, setFriendsList] = useState([])

    useEffect(()=>{
        axiosWithAuth()
            .get(`http://localhost:5000/api/friends`)
            .then(res=>{
                console.log(res)
                setFriendsList(res.data)
            })
            .catch(err=>console.log(err))
    },[])

    const submit = (object) => {
        const newfriend = {...object}
        axios.post(`http://localhost:5000/api/friends`, newfriend)
            .then(res => setFriendsList([...friendslist, newfriend]))
            .catch(err=>{console.log(err)})
    }

    return(
        <div>
            <div>{friendslist.length===0 ? <h2>Loading...</h2> : friendslist.map(item => <Friend friend={item} key={item.id}/>)}</div>
            <AddFriend submit={submit}/>
        </div>
    )
}

export default Friends