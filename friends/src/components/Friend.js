import React from 'react'

const Friend = (props) => {
    const { friend } = props

    return (
        <div>
            <h2>{friend.name}</h2>
            <p>age: {friend.age}</p>
            <p>email: {friend.email}</p>
        </div>
    )
}
export default Friend;