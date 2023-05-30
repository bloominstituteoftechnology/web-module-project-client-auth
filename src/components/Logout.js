import React, { useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Logout() {
    const navigate = useNavigate();
    useEffect(()=>{
        const token=localStorage.getItem('token');

        axios.post('http://localhost:9000/api/logout', 
        //empty body bc logged out
        {},
        {headers: {
            authorization: token
        }})
        .then(resp => {
            console.log('LOGOUT resp:', resp);
            localStorage.removeItem('token');
            navigate('/login')
        })
        .catch(err=>{
            console.log('LOGOUT err:', err)

        },[])
    })
    return(
        <div>
            <h2>You Are Logged Out</h2>
        </div>
    )
} 