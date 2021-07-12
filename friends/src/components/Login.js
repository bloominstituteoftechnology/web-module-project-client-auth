import React, { useState } from 'react';
import axios from 'axios';

const initalValues = { username: '', pasword:''};

function Login() {
    const { push } = useHIstory();
    const [formValues, setFormValues] = useState({ username: '', password: ''});

    const handleChanges = e => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios
        .post('http://localhost:5000/api/login', formValues)
        .then(res => {
          window.localStorage.setItem('token', res.data.payload);
          push('/friends');
        })
        .catch((err) => console.log(err.message));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username</label>
            <input 
            id='username'
            name='username'
            value={formValues.username}
            onChange={handleChanges}
            />
            <label htmlFor='password'>Password</label>
            <input 
            id='password' 
            name='username'
            type='password'
            value={formValues.password} 
            onChange={handleChanges}
            />
            <button>Login</button>
        </form>
        
    )
}

export default Login
