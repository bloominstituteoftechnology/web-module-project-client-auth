import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import UserSection from './Components/utils/UserSection';
import Frenns from './Components/Frenns';
import Login from './Components/Login';
import Nav from './Components/Nav';
import Logout from './Components/Logout';

function App() {

  let isLoggedIn = localStorage.getItem("token");

  return (
    <div className="App">
      <Router>
        <Nav />
        {isLoggedIn && <Link to="/protected">Protected Page</Link>}
        {isLoggedIn && <UserSection />}
        <Switch>
          <PrivateRoute path="/protected" component={Frenns} />
          <PrivateRoute path="/logout" component={Logout}/>
          <Route path="/" component={Login} />
          <Route path="/login" component={Login} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
