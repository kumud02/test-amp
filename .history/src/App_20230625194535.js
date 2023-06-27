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

    <Router>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Layout>
  </Router>
    <Routes> 
      
      </Routes>

    
   
  );
}

export default App;
