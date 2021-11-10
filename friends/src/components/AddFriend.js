import React, { useState } from 'react'
import { useHistory } from 'react-router'
import axiosWithAuth from '../api'

const AddFriend = () => {
    const history = useHistory()

    const handleLogOut = () => {
        localStorage.removeItem('token')
        history.push('/login')
      }

      const initialState = {
          id:'',
          name:'',
          age:'',
          email: ''
      }

      const [newFriend, setNewFriend] = useState(initialState)

      const handleChange = (e) => {
            setNewFriend({
                ...newFriend,
                [e.target.name]:e.target.value
            })
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
        .then(res=>{
            history.push('/homepage')
        })
        .catch(err => {
            console.error(err)
        })
    }



    return (
        <div>
            <h3>Add Friend</h3>

            <form onSubmit={handleSubmit}>
    name: 
            <input
            type="text"
            name="name"
            onChange={handleChange}
          />
          age: 
          <input
            type="text"
            name="age"
            onChange={handleChange}
          />
          email
          <input
            type="email"
            name="email"
            onChange={handleChange}
          />
          <button>Add New Friend</button>
          </form>


            <button onClick={handleLogOut}>logout</button>
        </div>
    )
}

export default AddFriend
