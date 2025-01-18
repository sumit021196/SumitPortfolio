import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';

const projects = [
  { title: 'E-commerce Platform', image: '/images/ecommerce.jpg' },
  { title: 'AI Chatbot', image: '/images/chatbot.jpg' },
  { title: 'Portfolio Website', image: '/images/portfolio.jpg' },
];

const Portfolio = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Portfolio
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
          mt: 4,
        }}
      >
        {projects.map((project, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: '100%', sm: '45%', md: '30%' },
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Portfolio;
