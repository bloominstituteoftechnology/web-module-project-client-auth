import React from "react"
import "./App.css"
import Login from "./components/Login"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
        <Switch>
          {/* <Route path="/friends">
            <Friends />
          </Route> */}

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
