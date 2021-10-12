
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Logout from './components/Logout';
import Friends from './components/Friends';
import AddFriendForm from './components/AddFriendForm';




function App() {
  let isLoggedIn = localStorage.getItem('token');
  return (
    <Router>
      <div className="App">

        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          {
            (isLoggedIn && localStorage.getItem("role") === "admin") && <li><Link to="/admin">Admin</Link></li>
          }
          
          <li>
            { isLoggedIn && <Link to="/protected">Protected Page</Link> }
          </li>
        </ul>

        <Switch>
          <PrivateRoute exact path="/protected" component={Friends} />
          <PrivateRoute path="/logout" component={Logout} />
          <Route path='/add' component={AddFriendForm}/>
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />  
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
