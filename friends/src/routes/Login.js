import React, { useState } from 'react';
import { axiosWithAuth } from '../authorization/axiosWithAuth';

const Login = (props) => {
 const [credentials, setCredentials] = useState({
   email: '', password: ''
 });

  const login = e => {
    e.preventDefault();
    console.log(credentials)
    axiosWithAuth().post('https://reqres.in/api/login', credentials)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token);
        props.history.push('/');
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
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
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