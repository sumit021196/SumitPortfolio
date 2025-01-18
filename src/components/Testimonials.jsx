import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const testimonials = [
  { name: 'John Doe', feedback: 'Excellent service and support!' },
  { name: 'Jane Smith', feedback: 'They built the perfect solution for us!' },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Testimonials
      </Typography>
      {testimonials.map((testimonial, index) => (
        <Paper key={index} sx={{ p: 3, my: 2 }}>
          <Typography variant="body1">"{testimonial.feedback}"</Typography>
          <Typography variant="body2" align="right">
            - {testimonial.name}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default Testimonials;
