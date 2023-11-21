import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs'
import ContactUsMui from './components/ContactUsMui'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactUs/>}/>     
        <Route path="/contact-us-mui" element={<ContactUsMui/>}/>     
      </Routes>
    </Router>
  );
}

export default App;
