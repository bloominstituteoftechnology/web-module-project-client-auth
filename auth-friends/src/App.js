import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import "./App.scss";

import Home from './views/Home'
import Login from './views/Login'
import Logout from './views/Logout'
import AddProducts from './views/AddProducts'
import Products from './views/Products'
import PrivateRoute from './views/PrivateRoute'
import Header from './views/Header'
import Nav from './views/nav'
import Footer from './views/footer'


function App() {

  return (
    <Router>
    <div className="App">
      <Nav />
      <Header />
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route exact path='/add' component={AddProducts}/>
        <PrivateRoute exact path="/protected" component={Products} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
