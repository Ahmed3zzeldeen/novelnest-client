import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box sx={{mt:20 , display:"flex",flexDirection:"column", justifyContent:"center" , alignItems:"center"} }>
      <Typography variant="h1">404</Typography>
      <Typography variant="h4">Page Not Found</Typography>
      <Typography variant="body1" sx={{mb:2, mt:2 }}>The page you are looking for does not exist.</Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Go Back to Home
      </Button>
    </Box>
  );
};

export default NotFound;
