import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './components/Header';
import FriendList from './components/FriendList';
import Login from './components/Login';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import PrivateRoutes from "./components/PrivateRoutes"

function App() {
  const [friends,setFriends] = useState([])

  return (
    <>
    <Header />
    
    <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/friendlist' element={<PrivateRoutes><FriendList friends={friends} setFriends={setFriends}/></PrivateRoutes>}/>
          <Route path='/addfriend' element={<PrivateRoutes><AddFriend /></PrivateRoutes>}/>
          <Route path='/logout' element={<PrivateRoutes><Logout /></PrivateRoutes>}/>
    </Routes>
    </>
  );
}

export default App;
