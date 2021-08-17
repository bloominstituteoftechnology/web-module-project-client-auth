import React, {useEffect} from 'react';
import axiosWithAuth from '../Authorization/axiosWithAuth';

const Logout = (props)=>{
    useEffect(()=>{
        axiosWithAuth()
        .post('http://localhost:5000/api/logout')
        .then(res=>{
            localStorage.removeItem('token');
            localStorage.removeItem('username', res.data.username);
            localStorage.removeItem('password', res.data.username);
            props.history.push('/login');
        });
    }, []);
    return(<div></div>);
}

export default Logout