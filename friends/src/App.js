import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from "./components/FriendsList";
import AddFriendForm from "./components/AddFriendForm";

import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <h1>Friends</h1>

      <Link to="/friends" style={{marginRight: "10px"}}>see your friends!</Link>
      <Link to="/friends/add">add new friend?</Link>

      <Switch>
        <PrivateRoute path="/friends/add" component={AddFriendForm} />

        <PrivateRoute path="/friends" component={FriendsList} />
        
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
