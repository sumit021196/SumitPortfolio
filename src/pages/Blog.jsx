import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, ButtonGroup } from '@mui/material';

const Blog = () => {
  const [category, setCategory] = useState('All');

  const featuredPost = {
    id: 1,
    title: 'Mastering React: A Comprehensive Guide',
    description: 'Explore the depths of React development with our complete guide to mastering its concepts.',
    image: './public/featured-image.png', // Replace with your image URL
  };

  const posts = [
    {
      id: 2,
      title: 'Material-UI: Tips and Tricks',
      description: 'Enhance your UI development with these essential Material-UI tips.',
      category: 'Technical',
      image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    },
    {
      id: 3,
      title: 'Exploring the Alps',
      description: 'A breathtaking travelogue about the scenic Alps.',
      category: 'Travel',
      image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    },
    {
      id: 4,
      title: '10 Easy Recipes for Food Lovers',
      description: 'Delicious and easy recipes for food enthusiasts.',
      category: 'Food',
      image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    },
    {
      id: 5,
      title: 'Understanding Stock Market Basics',
      description: 'A beginner’s guide to the world of financial investments.',
      category: 'Financial',
      image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    },
  ];

  // Filter posts based on the selected category
  const filteredPosts = category === 'All' ? posts : posts.filter((post) => post.category === category);

  return (
    <Box sx={{ p: 0 }}>
      {/* Category Selector */}
      <Box sx={{ display: 'flex', justifyContent: 'center' , mb: 2}}>
        <ButtonGroup variant="contained" fullWidth aria-label="outlined primary button group">
          <Button onClick={() => setCategory('All')} sx={{ flexGrow: 1 }}>All</Button>
          <Button onClick={() => setCategory('Technical')} sx={{ flexGrow: 1 }}>Tech</Button>
          <Button onClick={() => setCategory('Travel')} sx={{ flexGrow: 1 }}>Travel</Button>
          <Button onClick={() => setCategory('Food')} sx={{ flexGrow: 1 }}>Food</Button>
          <Button onClick={() => setCategory('Financial')} sx={{ flexGrow: 1 }}>Fin</Button>
        </ButtonGroup>
      </Box>

      {/* Featured Post */}
      <Box
        sx={{
          mb: 4,
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: 3,
        }}
      >
        <CardMedia
          component="img"
          image={featuredPost.image}
          alt={featuredPost.title}
          sx={{ height: 400 }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 3,
          }}
        >
          <Typography variant="h3" sx={{ mb: 2 }}>
            {featuredPost.title}
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '70%', textAlign: 'center' }}>
            {featuredPost.description}
          </Typography>
        </Box>
      </Box>

      {/* Articles Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {filteredPosts.map((post) => (
          <Card
            key={post.id}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 2,
            }}
          >
            <CardMedia
              component="img"
              image={post.image}
              alt={post.title}
              sx={{ width: '40%', height: 200 }}
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h5" sx={{ mb: 1 }}>
                {post.title}
              </Typography>
              <Typography variant="body2">{post.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Blog;
