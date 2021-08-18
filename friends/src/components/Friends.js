import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const initialFormValues = {
    name: '',
    age: '',
    email: ''
}

const Friends = (props) => {
    const [friends, setFriends] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [friendsLength, setFriendsLength] = useState(0)

    useEffect(() => {
        getFriends()
    }, [])

    const getFriends = () => {
        setIsLoading(true)
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                setFriends(res.data)
                setFriendsLength(res.data.length)
                console.log(friendsLength)
            })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    }

    const handleChange = (e) => {
        console.log(friendsLength)
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let newFriend = {
            id: (friendsLength+1),
            name: formValues.name,
            age: formValues.age,
            email: formValues.email
        }
        axiosWithAuth()
            .post('/friends', newFriend)
            .then(res => setFriends(res.data))
            .catch(err => console.log(err))
        setFormValues(initialFormValues)
        props.history.push('/friends')
    }
    
    if(isLoading){
        return (<div>Loading friends...</div>)
    } else {
        return (
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>Friend Name
                            <input
                                type='text'
                                name='name'
                                value={formValues.name}
                                onChange={handleChange}
                            />
                        </label>
                        <label>Age
                            <input
                                type='text'
                                name='age'
                                value={formValues.age}
                                onChange={handleChange}
                            />
                        </label>
                        <label>Email
                            <input
                                type='text'
                                name='email'
                                value={formValues.email}
                                onChange={handleChange}
                            />
                        </label>
                        <button>Submit</button>
                    </form>
                </div>

                {friends.map(friend => {
                    return(
                        <div id={friend.id}
                            style={{
                            border:'solid 1px'
                        }}
                        >
                            <h2>{friend.name}</h2>
                            <h3>{friend.age}</h3>
                            <p>{friend.email}</p>
                        </div>
                    )
                })}
            </div>
        )}
}

export default Friends