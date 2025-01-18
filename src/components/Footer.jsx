import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ py: 2, textAlign: 'center', bgcolor: '#3f51b5', color: '#fff' }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Software Solutions. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
