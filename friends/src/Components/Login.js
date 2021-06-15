import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState({
        isLoading: false
    })
    const [state, setState] = useState({
        credentials: {
            username: '',
            password: ''
        }
    })

    if (isLoading === true) {
        return (
            <h2>Loading...</h2>
        )
    }

    const handleChange = e => {
        setState({
          credentials: {
            ...state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

    const login = e => {
    e.preventDefault();
    axios
        .post('http://localhost:5000/api/login', state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            history.push('/protected')
        })
        .catch(err => {
        console.log(err)
        })
    };

    return (
        <div>
            <form onSubmit={login}>
                <input
                    type="text"
                    name="username"
                    placeholder='Username'
                    value={state.credentials.username}
                    onChange={handleChange} 
                    />
                <input
                    type="text"
                    name="password"
                    placeholder='Password'
                    value={state.credentials.password}
                    onChange={handleChange} />
                <button>
                    Log in
                </button>
            </form>
        </div>
    )
}

export default Login;