import './App.css';
import {Route, Switch} from 'react-router-dom'
import FriendsList from './components/friends.js'
import Login from './components/login.js'
import PrivateRoute from './components/privateroute.js'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/friends' component={FriendsList}/>
      </Switch>
    </div>
  );
}

export default App;