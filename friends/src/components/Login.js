import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

const Login = () => {

    const initialState = {
        username: "",
        password: ""
    }

    const [login, setLogin] = useState(initialState)

    const history = useHistory()
    
    const handleChange = (e) => {
        setLogin({
            ...login, 
            [e.target.name]:e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', login)
        .then(res=>{
            localStorage.setItem('token', res.data.payload)
            history.push('/homepage')
        })
        .catch(err => {
            console.error(err)
        })
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    )
}

export default Login
