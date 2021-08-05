import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/friends">
            <FriendsList />
          </Route>
          <Route path="*">
            <div>Route Not Found</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
