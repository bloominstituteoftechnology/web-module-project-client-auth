import './App.css';
import {Route, Switch} from 'react-router-dom'
import FriendsList from './Components/FriendsList'
//Components
import Login from './Components/Login'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/friendsList' component={FriendsList}/>
      </Switch>
    </div>
  );
}

export default App;
