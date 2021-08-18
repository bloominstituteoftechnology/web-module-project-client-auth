import { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import FriendsList from "./Components/FriendsList";
import CreateFriends from "./Components/CreateFriends";
import makeRequest from "./Api";
import "./Style/app.css";

function App() {
  const logout = () => {
    makeRequest().post("/api/logout")
      .then(() => {
        localStorage.removeItem("token")
      })
      .catch(err => console.log(err))
  }
  const [friends, setFriends] = useState([])
  useEffect(() => {
    makeRequest().get("/api/friends")
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
  }, [])
  return (
    <div className="App">
      <header>
        <Link to="/" onClick={logout}>
          Log Out
        </Link>
        <Link to="/">
          Log In
        </Link>
        <Link to="/friends">
          Friends
        </Link>
        <Link to="/makeFriend">
          Create Friend
        </Link>
      </header>
      <Switch>
        <main>
          <Route exact path="/">
            <Login/>
          </Route>
          <PrivateRoute 
            path="/friends" 
            component={() => 
              <FriendsList 
                friends={friends}
                setFriends={setFriends}
              />} 
          />
          <PrivateRoute 
            path="/makeFriend"
            component={() => 
              <CreateFriends setFriends={setFriends}/>
            } 
          />
        </main>
      </Switch>
    </div>
  );
}

export default App;
