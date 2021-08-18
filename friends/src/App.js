import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

import Login from './components/Login'
import Friends from './components/Friends'
import Logout from './components/Logout'

function App() {

  return (
    <div>
      <Router>
        <header>
          <h1>Friends</h1>
          <nav>
            <Link to='/friends'>
              <a>Friends</a>
            </Link>
            <Link to='/'>
              <a>Login</a>
            </Link>
            <Link to='/logout'>
              <a>Logout</a>
            </Link>
          </nav>
        </header>
        <div>
          <Route exact path='/' component={Login}/>
          <PrivateRoute path='/friends' component={Friends}/>
          <PrivateRoute path='/logout' component={Logout}/>
        </div>
        </Router>
    </div>
  );
}

export default App;
