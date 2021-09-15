import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";



const AddFriendForm = (props) => {

    const initialState = {
        name: '',
        age: '',
        email: '',
    }
    const [newFriend, setNewFriend] = useState(initialState)

    function handleChange(e) {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        // console.log('AddFriendForm.js ln:22 handeSubmit:', newFriend);
        // addFriend()
        console.log('AddFriendForm.js ln:24 newFriend', newFriend);
        axiosWithAuth()
            .post("/friends", newFriend)
            .then(res => {
                console.log('AddFriendForm.js ln:28 res', res);
                console.log('AddFriendForm.js ln:29 res', res.data);
                setNewFriend({
                    // ...this.state,
                    friends: res.data
                })
            })
            .catch(err => {
                console.log(`YO Error: `, err)
            })

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type='text'
                    name='name'
                    value={newFriend.name}
                    onChange={handleChange}
                />
                <label>Age:</label>
                <input
                    type='number'
                    name='age'
                    value={newFriend.age}
                    onChange={handleChange}
                />
                <label>Email:</label>
                <input
                    type='email'
                    name='email'
                    value={newFriend.email}
                    onChange={handleChange}
                />
                <div>
                    <button>Add New Friend</button>
                </div>
            </form>
        </div>
    )
}

export default AddFriendForm