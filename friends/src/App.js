import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Login from './components/Login';
import Home from './components/Home';
import FriendsList from './components/FriendsList';

function App() {

  // const history = useHistory();

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch >
          <Route exact path='/protected' component={FriendsList} />
          <Route path='/login' component={Login} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
