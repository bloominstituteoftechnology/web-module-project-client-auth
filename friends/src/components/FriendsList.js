import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

export const FriendsList = (props) => {
    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState({});

    useEffect(() => {
        getFriends()
    }, [])
    const getFriends = () => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err.response.data.error)
            })
    }

    const addFriend = e => {
        e.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/friends', {
            name: newFriend.name,
            age: newFriend.age,
            email: newFriend.email
        })
            .then(res => {
                setFriends(res.data)
                setNewFriend({name: '', age: '', email: ''})
            })
            .catch(err => {
                console.log(err.response.data.error)
            })
    }

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className='dashboard'>
            <h2>Your Friends</h2>
            <div className='dashboard-friend-container'>
            {friends.map(friend => (
                <div className='dashboard-friend' key={friend.id}>
                    <h3>{friend.name}</h3>
                    <p>Age: {friend.age}</p>
                    <p>Email address: {friend.email}</p>
                </div>
            ))}
            </div>
            <h2>Add a New Friend:</h2>
            <div className='form-container'>
                <form className='form' onSubmit={addFriend}>
                    <label>
                        <input type='text' name='name' value={newFriend.name} placeholder='Name:' onChange={handleChange}/>
                    </label>
                    <label>
                        <input type='text' name='age' value={newFriend.age} placeholder='Age:' onChange={handleChange}/>
                    </label>
                    <label>
                        <input type='text' name='email' value={newFriend.email} placeholder='Email:' onChange={handleChange}/>
                    </label>
                    <button>Add Friend</button>
                </form>
            </div>
        </div>
    )
} 