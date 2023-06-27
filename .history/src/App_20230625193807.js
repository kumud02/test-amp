import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import {Switch, Route} from "react-router-dom" 

function App() {
  return (
    <Switch>
      <Route path = "" />
      <Home />

    </Switch>

    
   
  );
}

export default App;
