import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (window.localStorage.getItem("token")) {
          console.log("im here");
          return <Component />;
        } else {
          console.log("in the else");
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}

export default PrivateRoute;