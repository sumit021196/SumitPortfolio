import React from 'react';
import { AppBar, Toolbar, Typography, Button,Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          SUMIT
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/Services">
          Services
        </Button>
        <Box sx={{ mx: 2 }}>
        <Button color="inherit" component={Link} to="/Contact">
          Contact
        </Button>
        </Box>
        <Button color="inherit" component={Link} to="/blog">
          Blog
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
