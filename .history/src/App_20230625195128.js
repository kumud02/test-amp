import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Service from './components/Service'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "/about" element={<About />} />
        <Route path = "/contact" element={<Contact />} />
        <Route path = "/service" element={<Service />} />
        <Route path = "/faq" element={<Faq />} />
        <Route path = "*" element={<Home />} />
      </Routes> 
  );
}

export default App;
