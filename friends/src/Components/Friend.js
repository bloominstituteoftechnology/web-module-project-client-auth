import React from 'react';

const Friend = (props) => {
    const { friend, id } = props;

    return (
        <div className='friend' key={id}>
            <h3>{friend.name}</h3>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
        </div>
    )
}

export default Friend;