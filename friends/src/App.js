import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Stuff</h1>

        <Switch>
          {/* <Route path="/Friends" component={Friends} /> */}
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
