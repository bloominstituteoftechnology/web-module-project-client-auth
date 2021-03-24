import './App.css';
import { Route, Link, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import {PrivateRoute} from './components/PrivateRoute'
import Friends from './components/Friends'

function App() {
  return (
    <div className="App">

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        {localStorage.getItem('token') && <Link to='/friends'>Friends</Link>}
        

      </nav>

      <Switch>
        <Route exact path = '/'>
          <Home/>
        </Route>

        <Route exact path='/login'>
          <Login/>
        </Route>

        <PrivateRoute exact path='/friends' component={Friends}/>


        
      </Switch>


     
    </div>
  );
}

export default App;
