import './App.css';
import { Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import {PrivateRoute} from './components/PrivateRoute'
import Friends from './components/Friends'
import Friend from './components/Friend'
import {axiosWithAuth} from './utils/axiosWithAuth'
import Nav from './components/Nav'

function App() {



  const logOut = () =>{

    axiosWithAuth()
      .post('/api/logout')
      .then(res=>{

        localStorage.removeItem('token')
        window.location.href = '/'
      
      })
      .catch(err => console.log(err))

  }
  return (
    <div className="App">

      <Nav logOut={logOut}/>

      <Switch>
        <Route exact path = '/' component={Home}/>
          
       

        <Route exact path='/login' component={Login}/>
          

        <PrivateRoute exact path='/friends' component={Friends}/>
        <Route path='/friends/:id' component={Friend}/>


        
      </Switch>


     
    </div>
  );
}

export default App;
