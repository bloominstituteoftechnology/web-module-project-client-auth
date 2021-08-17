import { Link, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import FriendsList from "./Components/FriendsList";
import makeRequest from "./Api";

function App() {
  const logout = () => {
    makeRequest().post("/api/logout")
      .then(() => {})
      .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <header>
        <Link to="/" onClick={logout}>
          Log Out
        </Link>
        <Link to="/">
          Log In
        </Link>
      </header>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <PrivateRoute 
          path="/friends" 
          component={FriendsList} 
        />
      </Switch>
    </div>
  );
}

export default App;
