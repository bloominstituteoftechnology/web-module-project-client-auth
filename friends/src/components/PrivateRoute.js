import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component:Component, ...rest})=> {
    return <Route {...rest} render={(props)=> {
        // console.log('PrivateRoute.js ln:6 props', props);
        if (localStorage.getItem("token")) {
            return <Component {...props}/>//note component is whatever component was passed in. So look at App.js and notice that each route identifies component={} so there is component={Login} and component={GasPrices} and component={Logout} for example. 
        } else {
            return <Redirect to="login"/>
        }
    }}/>
}

export default PrivateRoute;