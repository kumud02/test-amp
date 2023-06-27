import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Service from './components/Service'

import { BrowserRouter as Redirect, Route, Routes } from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route exact path = "/" element={<Home/>} />
        <Route exact path = "/about" element={<About />} />
        <Route exact path = "/contact" element={<Contact />} />
        <Route exact path = "/service" element={<Service />} />
        <Route exact path = "/faq" element={<Faq />} />
        <Redirect to "/"></Redirect>
      </Routes> 
  );
}

export default App;
