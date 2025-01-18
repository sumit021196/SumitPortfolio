import React from 'react';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <Header />
      <Container>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <ContactForm />
      </Container>
      <Footer />
    </Box>
  );
};

export default App;
