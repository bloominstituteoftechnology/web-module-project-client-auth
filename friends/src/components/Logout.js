import React, { useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Logout = (props) => {
    const {push} = useHistory();
    console.log(props)

    useEffect(() => {
        const token = localStorage.getItem('token')
        axiosWithAuth()
        .post('http://localhost:5000/api/logout')
        .then(res => {
            console.log(res)
            localStorage.removeItem(token)
            push('/login')
        });
    }, [])


    return (
        <div>
            
        </div>
    )
}

export default Logout
