import React, { useState } from "react"


import axiosWithAuth from "../helpers/axiosWithAuth"

const FriendsForm = (props) => {

//  console.log(props)

  const [friend, setFriend] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: ""
  })
  // console.log(friend)
  const handleChange = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post("/friends", friend)
      .then(res => {
        console.log(res.data)
        setFriend({
          ...props,
          name: "",
          age: "",
          email: ""
        })
  
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={friend.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          value={friend.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={friend.email}
          onChange={handleChange}
        />
        <button>Add a Friend</button>
      </form>
    </div>
  )
}

export default FriendsForm;