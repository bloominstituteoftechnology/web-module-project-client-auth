import React from 'react';

export default function Friend(props) {
    const { friend } = props;
    return (
        <li>
            <h2>Name: {friend.name}</h2>
            <h2>Age: {friend.age}</h2>
            <h2>Email: {friend.email}</h2>
        </li>
    )
}
