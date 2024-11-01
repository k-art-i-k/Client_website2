import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Footer1 from './components/Footer1'
import ServicesPage from './pages/ServicePage1';
import Contact from './pages/Contact';
import Tracking from './pages/Tracking';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact1 from './components/Contact/Contact'
import ScrollToTop from './scrollToTop' ;

const App = () => {
  return (
    <div className="bg-gray-500">
    <Router >
       <ScrollToTop /> {/* This ensures scrolling to top on route change */}
       
      <Navbar />

   
      <div className="min-h-screen"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/tracking" element={<Tracking />} /> 
           <Route path="/privacy-policy" element={<PrivacyPolicy/>} /> 
           <Route path='/contact1' element={<Contact1/>}/>
           
        </Routes>
      </div>

     <Footer1/>
      <Footer />
    </Router>
    </div>
  );
};

export default App;
