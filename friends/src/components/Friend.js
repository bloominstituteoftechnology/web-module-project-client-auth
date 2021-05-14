import React from "react";
import { useHistory } from "react-router-dom";

function Friend (props) {
    const { id, name, age, email } = props.friend;

    const history = useHistory();

    const editFriend = () => {
        history.push(`/friends/${id}`, props.friend)
    }
    return (
        <div>
            <h3>{name}</h3>
            <h5>Age: {age}</h5>
            <h5>Email: {email}</h5>
            <button onClick={editFriend}>Edit Friend</button>
        </div>
    )
}

export default Friend