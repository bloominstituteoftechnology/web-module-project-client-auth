import React from "react";
import { Route, Redirect } from "react-router";

// Should look, act, and behave like the Route component from react-router, with the following enhancements / additions:
// If the user is authenticated, render the "component" prop (normal behavior)
// Otherwise, redirect to /login

const ProtectedRoute = ({ component, ...rest }) => {
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

export default ProtectedRoute;