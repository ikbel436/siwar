import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignUp from './components/signup/SignUp';
import SignUp1 from './components/signup/SignUp1';
import SignUp2 from './components/signup/SignUp2';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/service/Services';
import Contact from './components/contact/Contact';
import client from './components/signup/contact';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
       
        <switch>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignUp1" element={<SignUp1 />} />
          <Route path="/SignUp2" element={<SignUp2 />} />
          <Route path="/client" element={<client />} />
        </Routes>


        </switch>
      </div>
    </Router>
  );
}

export default App;
