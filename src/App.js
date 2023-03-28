import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Login from './components/login';
import FriendsList from './components/FriendList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
      <div className="App">
        <header>
            <h2>Friends Database</h2>
            <Link className='link' to='login'>Login</Link>
            <Link className='link' to='friends'>Friends</Link>
            <Link className='link' to='friends/add'>Add Friends</Link>
            <Link className='link' to='logout'>Logout</Link>
        </header> 
      {/* Home */}
        <Routes>
          <Route exact path='/' element={<Login/>}>
          </Route>
        </Routes>

      {/* Login */}
        <Routes>
          <Route exact path='/login' element={<Login/>}>
          </Route>
        </Routes>

      {/* Friendlist */}
      {/* <PrivateRoute exact path ='/friends' component={FriendsList}/> */}
        <Routes>
          <Route exact element={<PrivateRoute  />}>
            <Route exact path ='/friends' element={<FriendsList/>} />
          </Route>
        </Routes>

        {/* Addfriend */}
        <Routes>
          <Route exact element = {<PrivateRoute />}>
            <Route exact path='/friends/add' element={<AddFriend/>}/>
          </Route>
        </Routes>

        {/* Logout */}
        <Routes>
          <Route exact element = {<PrivateRoute />}>
            <Route exact path='/logout' element={<Logout/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
