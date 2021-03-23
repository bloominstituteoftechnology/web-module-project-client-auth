import React, {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const initFormVal = {
    username: "",
    password: ""
}

export default function Login() {
    const [formVal, setFormVal] = useState(initFormVal)
    const history = useHistory();

const onChange= (e) => {
setFormVal({...formVal, [e.target.name]: e.target.value})
}

const handleLogin = (e) => {
    e.preventDefault();
        axios.post('http://localhost:5000/api/login', formVal)
    .then((resp)=>{
        console.log(resp.data.payload)
        localStorage.setItem('token', resp.data.payload)
        history.push('/friendsList')
    })
    .catch((err)=>{
        console.log(err.response)
    })
}

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                placeholder="username"
                type="text"
                name="username"
                value={formVal.username}
                onChange={onChange}>
                </input>
                <input
                placeholder="password"
                type="password"
                name="password"
                value={formVal.password}
                onChange={onChange}>
                </input>
                <button>Login</button>    

            </form>
        </div>
    )
}
