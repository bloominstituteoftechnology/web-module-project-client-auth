import React from "react";

import { Route, Redirect } from "react-router-dom";

// This is going to do a few things
// 1. wrap the plain Route component and pass in the same props.
// 2. check to see if we are logged in, if yes, render component
// 3. if the user is not logged in , redirect login

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (localStorage.getItem("token")) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />
    );
};

export default PrivateRoute;
