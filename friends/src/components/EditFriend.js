import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const newFriend = {
    name: '',
    age: '',
    email: ''
}

const EditFriend = () => {
    const [friend, setFriend] = useState(newFriend);

    let{push} = useHistory(); //Look in the Components React Dev Tools - to see what props like this you can use to access these specific pieces of data

    let{id}=useParams();//Each friend has own id, this lets us take out that specific id out of the param

    useEffect(() => {
        axiosWithAuth().get(`/friends/${id}`)
            .then(res => setFriend(res.data))
            .catch(err => console.log(err))
    }, [id]) //this is saying we only want this to change if this specific parameter changes


    const handleChange = e => {
        setFriend({...friend, 
        [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        axiosWithAuth().put(`/friends/${id}`, friend)//the .put is what updates only to the specific friend with that id, to the database, the push (below) is what redirects us to that friendlist page
            .then(() => push('/protected')) //pushing up back to the FriendsList page, the protected page, adding our new friend 
            .catch(err => console.log(err))
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type='text'
                    name='name'
                    placeholder='name'
                    value={friend.name}
                    onChange={handleChange}
                /> 
                <input
                    type='text'
                    name='age'
                    placeholder='age'
                    value={friend.age}
                    onChange={handleChange}
                />
                <input
                    type='email'
                    name='email'
                    placeholder='email'
                    value={friend.email}
                    onChange={handleChange}
                />
                <button>EditFriend</button>
            </form>
        </div>
    )
}
export default EditFriend;