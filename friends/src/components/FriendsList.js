import React, { useState, useEffect } from "react"
import { axiostWithAuth } from "../utils/axiosWithAuth"

const FriendsList = (props) => {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    axiostWithAuth()
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
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  )
}

export default FriendsList
