import React, { Component } from 'react'
import axios from 'axios'

const Logout = () => {

    
    axios.post('http://localhost:5000/api/logout', {
        headers: {
            authorization: localStorage.getItem('token')
        }
    })
        .then((res) => {
            console.log(res.data)
            localStorage.removeItem('token');
            this.props.history.push('/login')        })
        .catch((err) => {
            console.log(err.response)
        })
    

    
        return (
            <div></div>
        )
    }


export default Logout
