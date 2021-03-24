import React, {useEffect, useState} from 'react';
import './App.css';
import { Link, Switch, Route, useHistory} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import axiosWithAuth from './utils/axiosWithAuth'

function App() {

  const keeper = {
    username:'',
    password:'',
  }

  const [value,setValue] = useState(keeper)

  let history = useHistory()
  

 
  

  const handleChange = (e) => {
    setValue({...value, [e.target.name]:e.target.value})
  }

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }

  return (

    <div className="App">
     <Link to='/login' >Login</Link>
     <Link onClick={logout}>Logout</Link>
     <Switch>
       <Route path='/login'>
       <Login handleChange={handleChange} value ={value} history={history}/>
       </Route>
       <PrivateRoute path='/friendslist' component={FriendsList}/>
       <Route path='/'>
       </Route>
     </Switch>
    </div>
  );
}

export default App;
