//Here is where we check the localStorage for a token, and redirect this page to the login page if there is none
//*DO THIS FIRST - before setting up all your components
import React from "react";
import { Route, Redirect } from "react-router";

// Should look, act, and behave like the Route component from react-router, with the following enhancements / additions:
// If the user is authenticated, render the "component" prop (normal behavior)
// Otherwise, redirect to /login

const PrivateRoute = ({ component, ...rest }) => {
  if (localStorage.getItem('token')) {
    return (
      <Route component={component} {...rest} />
    )
  }
  else {
    return (
      <Redirect to="/login" />
    )
  }
};

export default PrivateRoute;