import React, {useState} from 'react'
import axios from 'axios'

export default function LoginForm() {
    const [formValues, setFormValues] = useState({username:"", password:""})

    const handleChange= (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }
    const formSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', formValues)
        .then((resp)=>{
            localStorage.setItem('token', resp.data.payload)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    return (
        <form onSubmit = {formSubmit} className = "loginForm">
            <h1>Login</h1>
            <label>Username
            <input
                type = "text"
                name = "username"
                value = {formValues.username}
                onChange = {handleChange}
            />
            </label>
            <br></br>
            <label>Password
            <input 
                type = "password"
                name = "password"
                value = {formValues.password}
                onChange = {handleChange}
            />
            </label>
            <br></br>
            <button>Submit</button>
        </form>
    )
}
