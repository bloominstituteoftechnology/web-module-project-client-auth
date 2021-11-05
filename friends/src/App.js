import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Friend's App</h1>
        <Link to='/friends/'>All Friends</Link>
        <Link to="/friends/add">Add Friends</Link>

      </div>
      <Switch>
        <PrivateRoute path="/friends/add" component={AddFriend}/>
        <PrivateRoute path="/friends" component={Friends}/>

        <Route path='/login'>
          <Login/>
        </Route>

        <Route>
          <Login/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
