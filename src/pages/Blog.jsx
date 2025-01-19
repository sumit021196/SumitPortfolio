import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: 'Mastering React: A Comprehensive Guide',
    description: 'Explore the depths of React development with our complete guide to mastering its concepts.',
    image: 'https://via.placeholder.com/800x400', // Replace with your image URL
  };

  const posts = [
    {
      id: 2,
      title: 'Material-UI: Tips and Tricks',
      description: 'Enhance your UI development with these essential Material-UI tips.',
      image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    },
    {
      id: 3,
      title: 'State Management in React',
      description: 'A beginner-friendly introduction to managing state in React applications.',
      image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    },
    {
      id: 4,
      title: 'Building Responsive Layouts',
      description: 'Learn how to create stunning responsive layouts for web applications.',
      image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
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
        {posts.map((post) => (
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
