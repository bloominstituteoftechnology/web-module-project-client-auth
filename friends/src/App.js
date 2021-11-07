import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { getFriend, getFriends } from "./services/backend.service";
import { login, logout } from "./services/firebase.service";

function App() {
  // once the component mounts, fetch list of smurfs

  const signIn = () => {
    login();
  };
  const signOut = () => {
    logout();
  };

  return (
    <Router>
      <div className="App">
        <button onClick={signIn}>login</button>
        <button onClick={signOut}>logout</button>
        <button onClick={() => getFriends()}>friends</button>
        <button onClick={() => getFriend()}>one friend</button>
        <nav>
          <ul>
            <li>
              <Link to="/">Landing page</Link>
            </li>
            <li>
              <Link to="/home">Home page</Link>
            </li>
          </ul>
          <Switch>
            <ProtectedRoute path="/home" component={Home} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </nav>
      </div>
    </Router>
  );
}

export default App;
