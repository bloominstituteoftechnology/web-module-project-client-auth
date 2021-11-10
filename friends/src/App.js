import React, { useState } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';


function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false)



  return (
    <div className="App">
      <h2>Client Auth Project</h2>
      <nav>
      <Link className='login' to='/login'>Login</Link>
      {isLoggedIn &&<Link className='logout' to='/logout'>Logout</Link>}
      </nav>
      <Switch>
      <PrivateRoute exact path='/friends' component={FriendsList} />
        <Route path='/login' render={(isLoggedIn, setIsLoggedIn) =><Login/>} />
        <Route path='/logout' component={Logout} />
      </Switch>
    </div>
  );
}

export default App;
