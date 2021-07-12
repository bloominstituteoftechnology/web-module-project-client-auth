import React from "react";
import { Route, Redirect } from "react-router-dom";

export function PrivateRoute(props) {
  const { children, ...rest } = props;

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return localStorage.getItem("token") ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
}
