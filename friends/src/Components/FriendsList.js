import React from 'react';
import Friend from './Friend';

export default function FriendsList(props) {
    const { friends } = props
    return (
        <>
            <h1>Friends</h1>
            <ul>
                {friends?.map(friend => 
                    <Friend friend={friend} key={friend.id}/>    
                )}
            </ul>
        </>
    )
}
