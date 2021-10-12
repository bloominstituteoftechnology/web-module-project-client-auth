
import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Login/>
          </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
