import './App.css';
import Home from './components/Home'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router> 
        <Switch>
          <Route exact path= "/home" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
