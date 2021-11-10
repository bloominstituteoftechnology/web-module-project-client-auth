import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Spinner from '../loading/Spinner';
import axiosWithAuth from '../../utils/axiosWithAuth'
import './styles.css'

const NewFriend = ({ handleClick }) => {
    const history = useHistory()
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        age: ''
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
        e.preventDefault()
        axiosWithAuth()
            .post('/friends', formData)
            .then(resp => {
                handleClick()
            });
    }
    return (

  <div className="grid align__item">
    {
        isLoading ?
        <Spinner /> :
        <div className="register">
      <img src='https://www.logolynx.com/images/logolynx/08/0841a6a659bb557e56a13073cfc14f3c.jpeg' />
      <h2>Add Friend</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__field">
          <input 
            name= 'email' 
            type="email" 
            placeholder="you@email.com"
            onChange={handleChange}
             />
        </div>
        <div className="form__field">
          <input 
            name= 'name' 
            type="text" 
            placeholder="Name"
            onChange={handleChange}
             />
        </div>
        <div className="form__field">
          <input 
            name= 'age' 
            type="text" 
            placeholder="Age"
            onChange={handleChange}
             />
        </div>
        <div >
          <input type="submit" value="Add" />
        </div>
      </form>
      <button className={'noselect'} onClick={() => handleClick()}>Back</button>
    </div>
    }
  </div>

    )
}

export default NewFriend