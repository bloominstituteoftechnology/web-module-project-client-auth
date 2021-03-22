import { Route, Switch, useHistory } from "react-router";

import Header from "./components/Header";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Friends from "./routes/Friends";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <PrivateRoute path='/friends' component={Friends} history={useHistory()}/>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
