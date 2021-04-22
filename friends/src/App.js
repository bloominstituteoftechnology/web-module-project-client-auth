
import './App.css';
import Login from './components/Login'
import {Route, Switch} from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute.js'
import GodList from './components/GodList'
import Header from './components/Header'
import ReactAudioPlayer from 'react-audio-player';
import theme from './RuneScape.mp3'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <PrivateRoute exact path='/protected' component={GodList}/>
        <Route path='/login' component={Login}/>
        <Route component={Login}/>
      </Switch>
      <ReactAudioPlayer src={theme} autoPlay controls />
    </div>
  );
}

export default App;
