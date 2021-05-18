import React, {useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const initialValues = {
    name: '',
    email: '',
    age: '',
}

export default function AddFriend(props) {

    const [values, setValues] = useState(initialValues) 
    const {getFriends, friends} = props  

        const change = evt => {
            const {name, value} = evt.target
            setValues({...values, [name]: value })
        }

        const addFriend = (newFriend) => {
            axiosWithAuth()
                .post(`/api/friends`, newFriend )
                .then(res => {
                    console.log(res.response)
                })
                .catch(err => {
                    console.log(err.response)
                })
                .then(()=>{
                    getFriends()
                })
        }

        const submit = evt => {
            evt.preventDefault()

            const newFriend = {
                ...values,
                id: friends.length+1
            }
        addFriend(newFriend);   
        setValues(initialValues);
        }

    return (
        <div className = "form-container">
        <form onSubmit={submit}>
        <label>Name       
          <input name='name' type='text' onChange={change} value={values.name} placeholder='Name'/>
        </label>
        <label>Age
          <input name='age' type='number' onChange={change} value={values.age} placeholder='Age'/>
        </label>
        <label>Email
          <input name='email' type='text' onChange={change} value={values.email} placeholder='Email'/>
        </label>

            <button>Submit</button>
        </form> 
        </div>
    )
} 