import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoutes';
import FriendsList from './components/FriendsList';

import Login from './components/Login';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Friends</h1>
      <Link to= '/friends/'style={{marginRight: '16px'}}>See Friends</Link>
      <Link to= '/friends/add-new'>Add Friend</Link>

      <Switch>

      < PrivateRoute path='/friends/add-new' component ={AddFriendForm}/>
      < PrivateRoute path='/friends' component ={FriendsList}/>

      <Route path='/login'>
        <Login />
      </Route>

      <Route>
        <Login />
      </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
