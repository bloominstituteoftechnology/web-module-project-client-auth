import React from 'react';
import axios from 'axios';

import {axiosWithAuth} from '../utils/axiosWithAuth'


export const Friend = (props) => {
    const {friend} = props;

    const removeFriend = (friendId) => {

        axiosWithAuth()
        .delete(`http://localhost:5000/api/friends/${friendId}`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    return(
        <div>
            <h3>Name: {friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <button onClick={() => removeFriend(friend.id)} >Remove Me!</button>
        </div>
    );
};
