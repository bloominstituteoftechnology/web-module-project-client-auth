import React, { useState } from "react";

const AddFriendForm = (props) => {
    const { addFriend } = props;
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
    console.log('AddFriendForm.js ln:22 handeSubmit:', newFriend);
    addFriend()
}
    return (
        <div>
            
        </div>
    )
}

export default AddFriendForm