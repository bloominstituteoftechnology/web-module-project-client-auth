import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function Friends(props) {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then((res) => {
                setFriends(res.data);
                console.log(res.data)
            })
            .catch((err) => console.log(err))
    }, []);

    return (
        <div>
            <h3>Friends List</h3>
            {friends.map((friend) => (
                <p key={friend.id}>{friend.name}</p>
            ))}
        </div>
    );
}
