import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import FriendList from "./components/FriendsList";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li></li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendList} />
      </Switch>
    </Router>
  );
}

export default App;
