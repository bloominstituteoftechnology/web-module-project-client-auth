import React from "react";
import { Route, Redirect } from "react-router-dom";

//...rest, everything else: The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript. //universal

const PrivateRoute = ({ component: Component, ...rest }) => {
  // destructuring the component, and everything else, ...rest is an object with all other props that might be passing down
  return (
    <Route
      {...rest} // passing each props as themselves in the route as we did into our private route
      render={(props) => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />; //
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;

// {
//   /* <PrivateRoute exact path="/protected" component={FriendsList} favoriteColor={'red'}/>
// <PrivateRoute path="/logout" component={Logout} /> */
// }
