import React from 'react'

const Friend = ({friend}) => {
    return (
        <div>
            {friend.name}
            {"  "}
            {friend.age}
            {"  "}
            {friend.email}
        </div>
    )
}

export default Friend
