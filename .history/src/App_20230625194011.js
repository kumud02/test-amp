import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import { Routes ,Route } from 'react-router-dom';


function App() {
  return (
    <Switch>
      <Route path = "/" component={Home} />
      <Route path = "/about" component={A} />
      <Home />

    </Switch>

    
   
  );
}

export default App;
