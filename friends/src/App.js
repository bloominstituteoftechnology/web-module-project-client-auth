import React from "react";
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import AddFriendForm from "./components/AddFriendForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello friends </h1>
        <Link to="/friends" style={{ marginRight: "16px" }}>
          See Friends
        </Link>
        <Link to="/friends/add-new">Add Friend</Link>

        <Switch>
          <PrivateRoute path="/friends/add-new" component={AddFriendForm} />
          <PrivateRoute path="/friends" component={FriendsList} />

          <Route path="/login">
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
