import {React} from 'react';
import './App.css';
import {Switch} from 'react-switch'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Friends from './Components/Friends';


function App() {
  return (
    <Router>
    <div className="App">
      <h2>Client Auth Project</h2>
      <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to='/friends'>Friends</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path= '/friends' component={Friends} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
