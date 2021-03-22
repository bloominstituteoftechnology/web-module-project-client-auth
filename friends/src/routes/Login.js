import React, { useState } from 'react';
import axios from 'axios'

const Login = (props) => {
 const [credentials, setCredentials] = useState({
   username: '', password: ''
 });

  const login = e => {
    e.preventDefault();
    console.log(credentials)
    axios.post('http://localhost:5000/api/login', credentials)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.payload);
        props.history.push('/');
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleChange = e => {
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value,
      })
  }

    return (
      <div>
        <form onSubmit={login}>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    )
}

export default Login;