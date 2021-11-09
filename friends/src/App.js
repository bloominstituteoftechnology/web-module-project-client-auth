import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Stuff</h1>
        <Link to="/friends">Friends</Link>
        <Link to="/friends/add" style={{ marginLeft: "2%"}}>Add Friend</Link>

        <Switch>
          <PrivateRoute path="/friends/add" component={AddFriend} />
          <PrivateRoute path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
