import { Redirect, Route } from "react-router";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        localStorage.getItem("token") ? (
          <Component {...rest} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default ProtectedRoute;
