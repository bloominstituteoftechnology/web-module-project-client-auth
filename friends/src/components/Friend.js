import React from 'react';



export const Friend = (props) => {
    const {friend} = props;

    return(
        <div>
            <h3>Name: {friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
        </div>
    );
};
