import React from 'react';
import { useHistory } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Login from './components/Login';
import Home from './components/Home';
import FriendList from './components/FriendList';

function App() {

  // const history = useHistory();

  return (
    <div className="App">
      <NavBar />
      <Switch >
        <Route exact path='/protected' component={FriendList} />
        <Route path='/login' component={Login} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
