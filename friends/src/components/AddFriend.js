import { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import { axiosWithAuth } from '../axiosAuth'

const AddFriend = (props) => {
    const { friends, setFriends } = props;
    const [friendFormData, setFriendFormData] = useState({
        name: '',
        age: '',
        email: ''
    })
    const history = useHistory()

    const handleChanges = (e) => {
        setFriendFormData({
            ...friendFormData,
            [e.target.name]: e.target.value
        })
    }
    const submitFriend = (e) => {
        e.preventDefault()
        axiosWithAuth().post('http://localhost:5000/api/friends', friendFormData).then(
            res => setFriends(res.data)
        ).catch(err => console.log(err))
        setFriendFormData({
            name: '',
            age: '',
            email: ''
        })
    }

    return (
        <div>
            <form>
                <label htmlFor="name">
                    <input onChange={handleChanges} type="text" name="name" placeholder="Enter Name" value={friendFormData.name} />
                </label>
                <label htmlFor="age">
                    <input onChange={handleChanges} type="text" name="age" placeholder="Enter age" value={friendFormData.age} />
                </label>
                <label htmlFor="email">
                    <input onChange={handleChanges} type="email" name="email" placeholder="email" value={friendFormData.email} />
                </label>
                <button onClick={submitFriend}>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend;