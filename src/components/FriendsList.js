import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function FriendList() {
    const [friends, setFriends] =useState([]);
    
    useEffect(()=>{
        const token = localStorage.getItem('token');
        axios
        .get(
            'http://localhost:9000/api/friends',
            { headers: {
                authorization:token
            }}
        )
        .then(resp=>{
            console.log('LOGGED IN', resp);
            setFriends(resp.data);
        })
        .catch(err=>{
            console.log(err)
        })
    },[]);

    return(
        <div>
            <h2>FRIENDLIST</h2>
            <ul>
                {
                    friends.map(friend=>{
                    return (
                        <li key={friend.id} className='Friends'>
                            <span 
                                style={{ fontWeight: 'bold' }}> {friend.name} -- {''}
                            </span>
                            {friend.age} y/o -- 
                            email:
                            {friend.email}
                        </li>
                    )}
                    )
                }
            </ul>
        </div>
    );
  }