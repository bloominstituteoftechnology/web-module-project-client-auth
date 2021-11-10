import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Spinner from '../loading/Spinner';
import './styles.css'

const Login = () => {
    const history = useHistory()
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        setIsLoading(true)
        console.log('in submit')
        e.preventDefault()
        axios.post('http://localhost:5000/api/login', formData)
        .then(resp=> {
          localStorage.setItem('token', resp.data.payload);
          setIsLoading(false)
          history.push('/protected');
        })
        .catch(err=> {
          setIsLoading(false)
          console.log(err);
        })
    }
    return (

  <div className="grid align__item">
    {
        isLoading ?
        <Spinner /> :
        <div className="register">
      <img src='https://www.logolynx.com/images/logolynx/08/0841a6a659bb557e56a13073cfc14f3c.jpeg' />
      <h2>Log In</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__field">
          <input 
            name= 'username' 
            type="text" 
            placeholder="username"
            onChange={handleChange}
             />
        </div>
        <div className="form__field">
          <input 
            name= 'password' 
            type="password"
            placeholder="•••••••"
            onChange={handleChange} 
            />
        </div>
        <div className="form__field">
          <input type="submit" value="Log In" />
        </div>
      </form>
    </div>
    }
  </div>

    )
}

export default Login