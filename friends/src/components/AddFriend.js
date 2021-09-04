import { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

const AddFriend = () => {
    const [friendData, setFriendData] = useState({
        name: '',
        age: '',
        email: ''
    })
    const history = useHistory()

    const handleChanges = (e) => {
        setFriendData({
            ...friendData,
            [e.target.name]: e.target.value
        })
    }
    const submitFriend = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/friends', friendData)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err);
            })
        setFriendData({
            name: '',
            age: '',
            email: ''
        })
    }

    return (
        <div>
            <form>
                <label htmlFor="name">
                    <input onChange={handleChanges} type="text" name="name" placeholder="Enter Name" value={friendData.name} />
                </label>
                <label htmlFor="age">
                    <input onChange={handleChanges} type="text" name="age" placeholder="Enter age" value={friendData.age} />
                </label>
                <label htmlFor="email">
                    <input onChange={handleChanges} type="email" name="email" placeholder="email" value={friendData.email} />
                </label>
                <button>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend;