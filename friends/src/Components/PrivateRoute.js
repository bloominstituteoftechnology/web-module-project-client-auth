import React from 'react';
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute(props) {
    const { component: Component, ...rest } = props;
    return (
        <Route {...rest } render={props =>
            localStorage.getItem("token") ?
                <Component {...props}/>
                :
                <Redirect to="/"/>
        }/>
    )
}
