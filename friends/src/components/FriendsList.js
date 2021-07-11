import axios from 'axios';
import React, { useState } from 'react';
import axiosWithAuth from '../helpers/axiosWithAuth';

const FriendsList = () => {
    const [friendsList, setFriendsList] = useState([]);

    //form state
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    axiosWithAuth().get("/friends")
      .then(res => setFriendsList(res.data))
      .catch(err => console.log(err))

      const handleChange = e => {
            setFriend({
                ...friend,
                [e.target.name]:e.target.value
            })
      }

      const handleSubmit = e => {
          e.preventDefault();
          axiosWithAuth().post('/friends', (friend))
          .then(res => console.log('posted', res))
          .catch(err => console.log(err))
      }



        return (
            <div>
                <form onSubmit = {handleSubmit}>
                    <div>Add Friend:</div>
                    <label>Name:
                        <input type = 'text' value = {friend.name} name = 'name' onChange = {handleChange}/>
                    </label>
                    <label>Age:
                        <input type = 'number' value = {friend.age} name = 'age' onChange = {handleChange}/>
                    </label>
                    <label>Email:
                        <input type = 'email' value = {friend.email} name = 'email' onChange = {handleChange}/>
                    </label>
                    <button>submit</button>
                </form>
                <div>Friends List:</div>
                <div>-------------------------</div>
                <div>
                    {friendsList.map(friend => (
                        <div key = {friend.id}>
                            <div>Friend: {friend.name}</div>
                            <div>Age: {friend.age}</div>
                            <div>Email: {friend.email}</div>
                            <div>-------------------------</div>
                        </div>
                    ))}
                </div>
            </div>
        )
}

export default FriendsList;
