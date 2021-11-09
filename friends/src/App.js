import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login'
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriendForm from './components/AddFriendForm';
import Logout from './components/Logout';
import { connect } from 'react-redux';

const App= (props) => {
  console.log('props from app:',props)
  return (
    <div className="App">
      <Router>
        <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            <li>
              <Link to="/friends">Friends</Link>
            </li>
            <li>
              <Link to="/newfriend">Add Friend</Link>
            </li>
          </ul>
          <h2>Client Auth Project</h2>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route exact path="/" component={Login} />    
            <PrivateRoute exact path="/friends" component={FriendsList} />    
            <PrivateRoute exact path="/newfriend" component={AddFriendForm} />    
          </Switch>
        </Router>
    </div>
  );
}

const mapStateToProps=state=>{
  return{
     state
  }
}

export default connect(mapStateToProps)(App);
