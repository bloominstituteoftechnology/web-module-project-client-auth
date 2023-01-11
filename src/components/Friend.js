import React from "react";

const Friend = ({friend}) => {
    return(
        <>
            <li key={friend.id}>
                <p>{friend.name} - {friend.age ? `age: ${friend.age} -` : ""}  {friend.email}</p>
            </li>
        </>
    )
}

export default Friend