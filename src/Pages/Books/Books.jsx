import React from 'react';
import { Grid, Typography } from '@mui/material';
import { BookCard } from '../../Components';
const Books = () => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography sx={{mt:"20px" ,display:"flex" , justifyContent:"center"}} variant="h4" component="h1">
          Books
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}><BookCard /></Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}><BookCard /></Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}><BookCard /></Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}><BookCard /></Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}><BookCard /></Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}><BookCard /></Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}><BookCard /></Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}><BookCard /></Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}><BookCard /></Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}><BookCard /></Grid>
    </Grid>
  );
};

export default Books;
