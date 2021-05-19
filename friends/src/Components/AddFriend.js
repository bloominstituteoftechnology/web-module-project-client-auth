import React, { useState } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../Utils/axiosWithAuth';

const AddFriend = () => {
    const [state, setState] = useState({
        name: '',
        age: '',
        email: '',
        // id: '',
    })

    const initialFormValues = {
        name: '',
        age: '',
        email: '',
        // id: ''
    }
    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        // e.preventDefault();

        const newFriend = {
            name: formValues.name,
            age: formValues.age,
            email: formValues.email,
            // id: formValues.id,
        }

        axiosWithAuth()
            .post('http://localhost:5000/api/friends', newFriend)
            .then(res => {
                const token = localStorage.getItem('token');
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

        setFormValues(initialFormValues)
    }


    return (
        <div>
            <h3>Got a New Friend?</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label><br/>
                        <input onChange={handleChange} name='name' type='text'
                        value={formValues.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label><br/>
                        <input onChange={handleChange} name ='age' type='number'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label><br/>
                        <input onChange={handleChange} name='email' type='email'/>
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="id">Id Number:</label><br/>
                        <input onChange={handleChange} name='id' type='number'/>
                    </div> */}
                    <br></br>
                    <button onSubmit={handleSubmit}>Add Friend</button>
                </form>
        </div>
    )
}

export default AddFriend;