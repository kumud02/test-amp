import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Service from './components/Service'

import { Routes ,Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path = "/" component={Home} />
      <Route path = "/about" component={About} />
      <Route path = "/contact" component={Contact} />
      <Home />


    
   
  );
}

export default App;
