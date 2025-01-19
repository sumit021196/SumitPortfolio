import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="sticky" color="primary" sx={{ mb: 2 }}> {/* Add bottom margin here */}
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          SM
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/Services">
          Services
        </Button>
        <Button 
          color="inherit" 
          component={Link} 
          to="/Contact" 
          sx={{ ml: 2 }} // Add margin to the left of Contact
        >
          Contact
        </Button>
        <Button color="inherit" component={Link} to="/blog">
          Blog
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
