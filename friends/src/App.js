import './App.css';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import PrivateComponent from './components/PrivateComponent';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Juans app</h1>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/private'>
        <PrivateRoute component={PrivateComponent} />
      </Route>
    </div>
  );
}

export default App;
