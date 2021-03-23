import './App.css';
import {Route, Switch} from 'react-router-dom'
import FriendsList from './Components/FriendsList'
//Components
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path='/login' component={Login}/>
      <PrivateRoute path='/friendsList' component={FriendsList}/>
      </Switch>
    </div>
  );
}

export default App;
