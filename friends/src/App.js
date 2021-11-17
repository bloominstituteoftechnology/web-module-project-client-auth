import React from "react"
import "./App.css"
import Login from "./components/Login"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"
import FriendsList from "./components/FriendsList"
function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
        <Switch>
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
