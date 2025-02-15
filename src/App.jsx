import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Blog from './pages/Blog'; // New Blog Component
import MobileGrid from './components/Mobilegrid';


const App = () => {
  return (
    <Router>
      <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <Portfolio />
                <Testimonials />
                <ContactForm />
              </>
            } />
            
            <Route path="/services" element={<MobileGrid />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/Blog" element={<Blog />} />
            
          </Routes>
        </Container>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
