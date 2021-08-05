import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <div>Route Not Found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
