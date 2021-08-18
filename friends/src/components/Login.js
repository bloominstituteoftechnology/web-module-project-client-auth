import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const initialFormValues = {
    username: '',
    password: ''
}

const Login = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues)

    const { push } = useHistory()

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/login', formValues)
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                push('/friends')
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Login
                    <input
                        type='text'
                        name='username'
                        value={formValues.username}
                        onChange={handleChange}
                    />
                </label>
                <label>Password
                    <input
                        type='password'
                        name='password'
                        value={formValues.password}
                        onChange={handleChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login