import { Redirect, Route } from "react-router";
import Home from "./Home";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  console.log(rest);
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />;
  return <Component />;
};

export default ProtectedRoute;
