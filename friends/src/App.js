import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import {FriendsListForm} from './components/FriendsListForm';



import './App.css';

function App() {

  const logout = () => {

  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <div>
          <h1>Header Stuff!</h1>
          <nav>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link onClick={logout}>Logout</Link>
              </li>
              <li>
                <Link to="/friendsListForm">FriendsListForm</Link>
              </li>
            </ul>
          </nav>
        </div>
        </header>
        <Switch>
          {/* <PrivateRoute exact path='/protected' component={FriendsListForm} /> */}
          <Route path="/friendsListForm" component={FriendsListForm} />
          <Route path="/login" component={Login} />
          <Route component={Login} />

        </Switch>
      </div>
    </Router>

  );
}

export default App;
