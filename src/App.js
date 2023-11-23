import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs'
import ContactUsMui from './components/ContactUsMui'
import ContactUsWithValidation from './components/ContactUsWithValidation'
import ContactUsYupValidation from './components/ContactUsYupValidation'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactUs/>}/>     
        <Route path="/contact-us-mui" element={<ContactUsMui/>}/>     
        <Route path="/contact-us-with-validation" element={<ContactUsWithValidation/>}/>     
        <Route path="/contact-us-yup-validation" element={<ContactUsYupValidation/>}/>     
      </Routes>
    </Router>
  );
}

export default App;