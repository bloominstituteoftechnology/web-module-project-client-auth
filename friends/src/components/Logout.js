import React, { Component } from 'react'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Logout = () => {

    axiosWithAuth().post('/logout')
        .then((res) => {
            console.log(res.data)
            localStorage.removeItem('token');
            window.location.pathname = '/login'        })
        .catch((err) => {
            console.log(err.response)
        })
    

    
        return (
            <div></div>
        )
    }


export default Logout
