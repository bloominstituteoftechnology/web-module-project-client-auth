import React from "react"

const Friend = (props) => {
    const { friend } = props

    return (
        <div>
            <h4>{friend.name}</h4>
            <p>age: {friend.age}</p>
            <p>email: {friend.email}</p>
        </div>
    )
}
export default Friend;