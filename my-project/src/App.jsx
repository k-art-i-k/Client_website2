import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
// import Tracking from './pages/Tracking';

const App = () => {
  return (
    <Router>
      
      <Navbar />

   
      <div className="min-h-screen"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tracking" element={<Tracking />} /> */}
        </Routes>
      </div>

     
      <Footer />
    </Router>
  );
};

export default App;
