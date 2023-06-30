import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Service from './components/Service'
import Navbar   from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HowItWorks from './components/HowItWorks';

import {BrowserRouter as Router,
Routes,
Route,
Navigate,} from 'react-router-dom';
import { Fragment } from 'react';
function App() {
  return (
      <Fragment>
        <ScrollToTop />
        
                  {/* <Navbar /> */}

        <Routes>
        <Route exact path = "/" element={<Home/>} />
        <Route exact path = "/about" element={<About />} />
        <Route exact path = "/contact" element={<Contact />} />
        <Route exact path = "/service" element={<Service />} />
        <Route exact path = "/faq" element={<Faq />} />
        <Route exact path = "/how-it-works" element={<HowItWorks />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes> 
      <Footer />

      </Fragment>
      
  );
}

export default App;
