import logo from './logo.svg';
import './App.css';

function App() {

  const logout = () => {
    localStorage.removeItem('token')
  }

  const isAuth = localStorage.getItem('token')

  return (
    <Router>
      <div className='App'>
        <div className='Header'>
          <h1>Authentication</h1>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              {!isAuth ? <Link to='/friends'>Friends</Link> : <div></div>}
            </li>
            <li>
              {!isAuth ? <Link to='/friends/form'>Friends Form</Link> : <div></div>}
            </li>
            <li>
              <Link onClick={logout}>Logout</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <PrivateRoute exact path='/friends/form' component={FriendForm} />
          <PrivateRoute exact path='/friends' component={FriendList} />
          <Route path='login' component={Login} />
          <Route component={Login} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
