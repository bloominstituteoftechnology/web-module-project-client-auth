import React from "react";
import { Route, Redirect } from "react-router-dom";

//...rest, everything else: The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript. //universal

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

// {
//   /* <PrivateRoute exact path="/protected" component={FriendsList} />
// <PrivateRoute path="/logout" component={Logout} /> */
// }
