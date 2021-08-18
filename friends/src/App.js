import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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
            <Link to='/protected'>
              <a>Friends</a>
            </Link>
          </nav>
        </header>
        <div>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route path='/protected'>
            <Friends/>
          </Route>
        </div>
        </Router>
    </div>
  );
}

export default App;
