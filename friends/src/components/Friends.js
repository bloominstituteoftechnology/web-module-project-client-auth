import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";

function Friends () {

    const [friends, setFriends] = useState([])
    useEffect(() => {
        axiosWithAuth().get("/friends")
            .then(res => {
                console.log(res);
                setFriends(res.data)
            })
            .catch(err => console.log(err))
    },[])
    return (
        <div>
            {friends.map(friend => (
                <Friend friend={friend} key={friend.id} />
            ))}
        </div>
    )
}

export default Friends