import React from 'react';
import { Redirect, Route } from 'react-router';


const token =  localStorage.getItem('token');

const PrivateRoute = ({component: Component, ...rest}) => {
    return( 
        <Route {...rest} render ={props => (
            token ? 
            <Component {...props}/>
            : <Redirect to = '/login'/>
        )}/>
    )
}

export default PrivateRoute