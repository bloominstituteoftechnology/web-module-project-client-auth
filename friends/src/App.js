import { Component } from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import ProtectedRoute from "./components/ProtectedRoute";

class App extends Component {
  // once the component mounts, fetch list of smurfs
  componentDidMount() {
    //fetch api details
  }

  render() {
    return (
      <Router>
        <div className="App">
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
              <Route exact path="/" component={LandingPage} />
              <ProtectedRoute path="/home" component={Home} />
            </Switch>
          </nav>
        </div>
      </Router>
    );
  }
}

export default App;
