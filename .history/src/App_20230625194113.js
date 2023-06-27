import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from 

import { Routes ,Route } from 'react-router-dom';


function App() {
  return (
    <Switch>
      <Route path = "/" component={Home} />
      <Route path = "/about" component={About} />
      <Route path = "/contact" component={About} />
      <Home />

    </Switch>

    
   
  );
}

export default App;
