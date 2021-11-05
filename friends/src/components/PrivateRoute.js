import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest} render={ () => {
            if (window.localStorage.getItem('token')) {
                return <Component />
            } else {
                return <Redirect to="/login" />;
            }
        }}/>
    )
}
