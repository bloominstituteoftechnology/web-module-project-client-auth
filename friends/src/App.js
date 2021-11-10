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
  const loggedIn = props.state.loggedIn

  return (
    <div className="App">
      <Router>
        <header className='header'>
          <h1>Get'chya Fraynds</h1>
          <nav>
              {loggedIn && <Link className='linky' to="/friends">Friends</Link>}
              {loggedIn && <Link className='linky' to="/newfriend">Add Friend</Link>}
              {!loggedIn && <Link className='linky blinders' to="/login">Login</Link>}
              {loggedIn && <Link className='linky blinders' to="/logout">Logout</Link>}
          </nav>
        </header>
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
