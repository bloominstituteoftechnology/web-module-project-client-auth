import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


import Login from './components/Login.js'
import FriendsPage from './components/FriendsPage.js'
import PrivateRoute from './components/PrivateRoute.js'

function App() {

  return (
    <Router>
    <div className="App">
      <nav>
        <ol>
          <Link to="/">Home</Link>
        </ol>
        <ol>
          <Link to="/login">Login</Link>
        </ol>
        <ol>
          {localStorage.getItem('token') ? <Link to="/friends">Friends</Link>: <div> Please Log in</div>}
        </ol>
      </nav>

      <Switch>
      <Route path='/login' component={Login}/>
      <PrivateRoute exact path='/friends' component={FriendsPage}/>
      <Route exact path='/'/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
