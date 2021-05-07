import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';




const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get("/friends")
            .then( res => {
                console.log(res)
                setFriends(res.data)
            
            })
            .catch(err => console.log(err))
    }, [] ) //our empty array to only run when it mounts, so it doesn't run infinitely
    

    return(
        <div>
            <Link to='/add-friend'><button>Add Friend</button></Link>
            {friends.map(friend => {
                return(
                    <div>
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                           <Link to={`/edit-friend/${friend.id}`}> <button>Edit</button></Link>{/*not actually working */}
                            <button>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
export default FriendsList;