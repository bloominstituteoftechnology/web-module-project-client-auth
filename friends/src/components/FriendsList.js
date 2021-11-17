import React, { useState, useEffect } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth"

const FriendsList = (props) => {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        setFriends(res.data)
        console.log(res)
      })
      .catch((error) => {
        console.log({ error })
      })
  }, [])

  return (
    <div>
      <h3>Current Friends in Private </h3>
      {friends.map((item) => (
        <div key={item.id}>
          <h5>{item.name}</h5>
          <h6>{item.email}</h6>
        </div>
      ))}
    </div>
  )
}

export default FriendsList
