import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/login';
import Logout from './components/logout';
import Friends from './components/friends';


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
