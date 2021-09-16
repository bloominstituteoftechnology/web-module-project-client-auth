import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // step 1 
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import './App.css';

function App() {
  return ( // step 2: wrap router and add Route and Login 
    <Router>
        <div className="App">
        <h1>Hello Friends</h1>
        <Link to='/friends/add-new'>Add Friend </Link>
        
        <Switch>

        <PrivateRoute path='/friends/add-new' component={AddFriendForm}/> 
        <PrivateRoute path='/friends' component={FriendsList}/> 

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
