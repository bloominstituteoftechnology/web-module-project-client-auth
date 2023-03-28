import React, {useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    let navigate = useNavigate();
    const token = localStorage.getItem('token')
    useEffect(()=>{
        axios.post('http://localhost:9000/api/logout',{}, {
            headers: {
                authorization: token
            }
        })
        .then(res => {
            localStorage.removeItem('token')
            navigate('/login')
        })
        .catch(err => {
            console.error(err)
        })
    },[])

}

export default Logout