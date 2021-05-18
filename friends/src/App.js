import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './Components/Login'

function App() {
  return (
    <div className="App">
      <Router>
        
        <Link to="/Login">Login</Link>

        <Switch>
          <Route path={'/Login'}>
              <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
