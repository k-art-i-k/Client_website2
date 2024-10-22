import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Footer1 from './components/Footer1'
import ServicesPage from './pages/ServicePage';
import Contact from './pages/Contact';
import Tracking from './pages/Tracking';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () => {
  return (
    <Router>
      
      <Navbar />

   
      <div className="min-h-screen"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/tracking" element={<Tracking />} /> 
           <Route path="/privacy-policy" element={<PrivacyPolicy/>} /> 
           
        </Routes>
      </div>

     <Footer1/>
      <Footer />
    </Router>
  );
};

export default App;
