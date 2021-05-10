import { Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return(
        <Route { ...rest } render={(props) => {
            if (localStorage.getItem("authToken")) {
                return <Component { ...props } />;
            } else {
                alert("We know you're excited but let's sign up a new account or login first!")
                return <Redirect to="/login" />;
            }
        }}
        />
    )
}

export default PrivateRoute