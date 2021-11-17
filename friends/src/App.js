import React from "react"
import "./App.css"
import Login from "./components/Login"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"
import FriendsList from "./components/FriendsList"
import AddFriendForm from "./components/AddFriendForm"
function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
        <Link to="/friends" style={{ marginRight: "20px" }}>
          See Friends
        </Link>
        <Link to="/friends/add-new">Add Friends</Link>
        <Switch>
          <PrivateRoute
            path="/friends/add-new"
            component={AddFriendForm}
          ></PrivateRoute>
          <PrivateRoute path="/friends" component={FriendsList}></PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>

          <Route>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
