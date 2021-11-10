import React from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom'
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <h2>Client Auth Project</h2>
      <nav>
      <Link className='login' to='/login'>Login</Link>
      <Link className='logout' to='/logout'>Logout</Link>
      </nav>
      <Switch>
        <Route path='/login' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
