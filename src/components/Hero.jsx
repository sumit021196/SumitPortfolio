import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 6,
        background: 'linear-gradient(to right, #3f51b5, #2196f3)',
        color: '#fff',
        borderRadius: 2,
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to Software Solutions
      </Typography>
      <Typography variant="h6" gutterBottom>
        We provide cutting-edge technology solutions tailored for your needs.
      </Typography>
      <Button variant="contained" color="secondary" size="large">
        Get Started
      </Button>
    </Box>
  );
};

export default Hero;
