import React from "react";
import {Outlet, Navigate} from 'react-router-dom';

const PrivateRoutes = () => {
    console.log('localStorage.getItem(token):', localStorage.getItem('token'))
 
    const token = localStorage.getItem('token')
    return (
        token ? <Outlet/> : <Navigate to = "/"/>        
    ) 
}

export default PrivateRoutes