import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import NewFriendForm from './components/NewFriendForm';
import Logout from './components/Logout';
import EditFriend from "./components/EditFriend";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/login">Login</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/newFriend">Add a friend</Link>
        <Logout />
        <Switch>
            <Route path="/login" component={Login}/>
            <PrivateRoute exact path="/friends" component={Friends} />
            <PrivateRoute path="/newFriend" component={NewFriendForm} />
            <PrivateRoute path='/friends/:id' component={EditFriend} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
