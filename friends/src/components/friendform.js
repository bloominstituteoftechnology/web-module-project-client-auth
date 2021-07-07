import React, {useState} from 'react'
import axios from 'axios'
import {axiosWithAuth} from '../components/axiosWithAuth.js'

export default function FriendsForm(props) {
    const {fetchMyFriendsList} = props 
    const [newFriend, setNewFriend] = useState({id:"",name:"",age:"",email:""})

    const handleChange = (e)=>{
        setNewFriend({...newFriend, [e.target.name]:e.target.value})
    }

    const addNewFriend = (e) =>{
        e.preventDefault();
        const addNewFriend={
            id: new Date(),
            name: newFriend.name,
            age: newFriend.age,
            email: newFriend.email,
        }
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', addNewFriend)
        .then((res)=>{
            fetchMyFriendsList();
        },)
    }

    return (
        <div>
            <form onSubmit={addNewFriend}>
                <label>Name
                <input
                type="text"
                name="name"
                value= {newFriend.name}
                onChange={handleChange}>
                </input>
                </label>
                <label>Age
                <input
                placeholder="age"
                type="text"
                name="age"
                value= {newFriend.age}
                onChange={handleChange}>
                </input>
                </label>
                <label>Email
                <input
                placeholder="email"
                type="email"
                name="email"
                value= {newFriend.email}
                onChange={handleChange}>
                </input>
                </label>
                <button> Add Friend </button>
            </form>
        </div>
    )
}