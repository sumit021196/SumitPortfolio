import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const ContactForm = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Box component="form" sx={{ mt: 4, maxWidth: 400, mx: 'auto' }}>
        <TextField fullWidth label="Name" margin="normal" />
        <TextField fullWidth label="Email" margin="normal" />
        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}
          margin="normal"
        />
        <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
