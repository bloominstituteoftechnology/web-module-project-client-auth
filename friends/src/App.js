import './App.css';
import Login from './components/Login';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Juans app</h1>
      <Route path='/login'>
        <Login />
      </Route>

    </div>
  );
}

export default App;
