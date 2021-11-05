import Login from './components/Login'
import { Link, Route, Switch } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import FriendsList from './components/FriendsList'

import './App.css';

function App() {
  return (
    <div className="App">
      <Link to='/login'> Login </Link>
      <Link to='/'> Home </Link>
        <div>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <ProtectedRoute path='/protected' component={FriendsList}/>
            <Route path='/'></Route>
          </Switch>
        </div>
    </div>
  );
}

export default App;
