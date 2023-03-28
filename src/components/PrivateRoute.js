import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'

const PrivateRoute = () => {
    let userId = localStorage.getItem('token') == null ? false : true
    console.log(userId)
    return (
        <>
            {userId ? <Outlet /> : <Navigate to='login'/>}
        </>
    )
}

export default PrivateRoute