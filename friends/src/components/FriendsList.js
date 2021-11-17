import axios from "axios"
import React, { useState, useEffect } from "react"

const FriendsList = (props) => {
  const [friends, setFriends] = useState()

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/friend")
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log({ error })
      })
  }, [])

  return (
    <div>
      <h3>Current Friends in Private </h3>
      {}
    </div>
  )
}

export default FriendsList
