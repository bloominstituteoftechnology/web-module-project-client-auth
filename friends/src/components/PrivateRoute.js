import React from "react";
import { Route, Redirect } from "react-router-dom";

// render a Route component
// take in all of the same props as a regular Route comp
// check to see if the user is authenticated
// if they are, render the component that was passed in
// if not, redirect user to "/login"

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (window.localStorage.getItem("token")) {
          console.log("Token showed up");
          return <Component />;
        } else {
          console.log("No token, player!");
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
