import React from 'react';
import { Typography, Box, Grow, Card, CardContent } from '@mui/material';

const services = [
  { title: 'Web Development', description: 'Modern, responsive websites.' },
  { title: 'Mobile Apps', description: 'Cross-platform mobile solutions.' },
  { title: 'AI & ML', description: 'Smart solutions powered by AI.' },
  { title: 'Cloud Integration', description: 'Secure and scalable systems.' },
];

const Services = () => {
  return (
    <Box sx={{ py: 6, bgcolor: '#f5f5f5' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: 'black' }}>
        Our Services
      </Typography>
      
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, mt: 4 }}>
        {services.map((service, index) => (
          <Grow in={true} timeout={500 * (index + 1)} key={index}>
            <Card sx={{ width: { xs: '100%', sm: '45%', md: '30%' }, boxShadow: 3 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography>{service.description}</Typography>
              </CardContent>
            </Card>
          </Grow>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
