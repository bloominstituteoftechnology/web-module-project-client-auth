import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

import Login from './components/Login'
import Friends from './components/Friends'

function App() {

  return (
    <div>
      <Router>
        <header>
          <h1>Friends</h1>
          <nav>
            <Link to='/'>
              <a>Login</a>
            </Link>
            <Link to='/friends'>
              <a>Friends</a>
            </Link>
          </nav>
        </header>
        <div>
          <Route exact path='/'>
            <Login/>
          </Route>
          <PrivateRoute path='/friends' component={Friends}/>
        </div>
        </Router>
    </div>
  );
}

export default App;
