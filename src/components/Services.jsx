import React, { useEffect, useState } from 'react';
import { Typography, Box, Grow, Card, CardContent } from '@mui/material';
import axios from 'axios';

const services = [
  { title: 'Web Development', description: 'Modern, responsive websites.' },
  { title: 'Mobile Apps', description: 'Cross-platform mobile solutions.' },
  { title: 'AI & ML', description: 'Smart solutions powered by AI.' },
  { title: 'Cloud Integration', description: 'Secure and scalable systems.' },
];

const API_URL = process.env.REACT_APP_API_URL;

const Services = () => {
  const [apiServices, setApiServices] = useState([]);

  

  useEffect(() => {
    const fetchServices = async () => {
      try {
        console.log("Fetching from:", process.env.REACT_APP_API_URL); // Debug
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/services`);
        console.log("API Response:", response.data);
        setApiServices(response.data);
      } catch (error) {
        console.error("API Fetch Error:", error);
      }
    };
    fetchServices();
  }, []);
  return (
    <Box sx={{ py: 6, bgcolor: '#f5f5f5' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: 'black' }}>
        Our Services
      </Typography>
      
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, mt: 4 }}>
        {[...services, ...apiServices].map((service, index) => (
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
