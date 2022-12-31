import React, {useEffect} from "react";
import axios from "axios";
import Friend from "./Friend";
import { useNavigate } from "react-router-dom";


const FriendList = (props) => {
    const token = localStorage.getItem('token')
    let navigate = useNavigate();

    useEffect(()=> {
        axios.create({ headers: { Authorization: token}})
        .get('http://localhost:9000/api/friends')
            .then(res => props.setFriends(res.data))
            .catch(err => {
                navigate('/')
            })
    }, [])

    return( 
        <>
        <h1>FriendList</h1>
        {props.friends.length != 0 ? 
        <ul>
        {props.friends.map((friend) => {
            return (<Friend friend={friend} key={friend.id}/>)            
        })}
        </ul>
        :
        <h2>No friends to display</h2>
        }
        </>
    )
}

export default FriendList;