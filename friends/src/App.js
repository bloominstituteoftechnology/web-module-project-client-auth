import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from './Login'
import Friends from './Friends'
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <div>
      <Router>

      <Switch>

      <PrivateRoute path="/friends" component={Friends}>
          <Friends/>
      </PrivateRoute>

      <Route path="/" component={Login}/>

      </Switch>

      </Router>
    </div>
  );
}

export default App;
