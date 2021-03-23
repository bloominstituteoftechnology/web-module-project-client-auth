import React, {useState} from 'react'
import axios from 'axios'
import {axiosWithAuth} from '../utils/axiosWithAuth'
const initialFormValues = {
    id: "",
    name: "",
    age: "",
    email: "",
  }

export default function FriendsForm(props) {
    const {fetchMyFriendsList} = props 
    const [newFriend, setNewFriend] = useState(initialFormValues)

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
        .then((resp)=>{
        
            fetchMyFriendsList();
        },
        console.log(newFriend))
    }

    return (
        <div>
            
            <form onSubmit={addNewFriend}>
                <input
                placeholder="name"
                type="text"
                name="name"
                value= {newFriend.name}
                onChange={handleChange}>
                </input>
                <input
                placeholder="age"
                type="text"
                name="age"
                value= {newFriend.age}
                onChange={handleChange}>
                </input>
                <input
                placeholder="email"
                type="email"
                name="email"
                value= {newFriend.email}
                onChange={handleChange}>
                </input>
                <button> Add My New Friend </button>
            </form>
        </div>
    )
}

