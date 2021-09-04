import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
        if (localStorage.getItem("authtoken")) {
            console.log('Welcome, you have permission')
            return <Component {...props} />
        } else {
            console.log('you dont have permission!')
            return <Redirect to="/login" />
        }
    }} />
}

export default PrivateRoute;