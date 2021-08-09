import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import AddFriendForm from "./components/AddFriendForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/friends" component={FriendsList} />
          <PrivateRoute path="/addFriend" component={AddFriendForm} />
          <Redirect from="/" to="/login" />
          <Route path="*">
            <div>Route Not Found</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
