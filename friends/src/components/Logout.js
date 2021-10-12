import React, { useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = (props) => {
    useEffect(() => {
        axiosWithAuth().post('http://localhost:5000/api/logout')
        .then(res => {
            localStorage.removeItem('token')
            props.history.push('/login')
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    return(
        <div></div>
    );
}

export default Logout;