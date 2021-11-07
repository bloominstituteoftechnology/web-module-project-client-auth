import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const AddFriendForm = (props) => {
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    });

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const addButton = e => {
        e.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
        .then(res => {
            console.log(res)
            props.setFriends((friend) => [...friend, newFriend]);
            props.history.push('/protected')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <form onSubmit={addButton}>
                <input
                    type='text'
                    name='name'
                    value={newFriend.name}
                    onChange={handleChange}
                    placeholder='Name'
                />
                <input
                    type='text'
                    name='age'
                    value={newFriend.age}
                    onChange={handleChange}
                    placeholder='Age'
                />
                <input
                    type='text'
                    name='email'
                    value={newFriend.email}
                    onChange={handleChange}
                    placeholder='Email'
                />
                <button>Add Friend</button>
            </form>
        </div>
    );
};

export default AddFriendForm;