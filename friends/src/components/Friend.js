import React from 'react';
import axiosWithAuth from '../utilitites/axiosWithAuth';

const Friend = (props)=> {
    const { friend } = props;
    
    const handleClick = (e) =>{
        axiosWithAuth()
            .get(`/friends/${friend.id}`)
            .then(resp=>{
                console.log('resp from edit', friend.id)
            })
         
    }

    return(
        <div className="friend-card">
            <p><b>Name:</b> {friend.name}</p>
            <p><b>Age:</b> {friend.age}</p>
            <p><b>Email:</b> {friend.email}</p>
            <button onClick={handleClick}>Edit Friend</button>
        </div>);
}

export default Friend;