import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import './User.css';
function User() {
    return (
        <>
        <Paper className='cover'
            sx={{
                p: 2,
                display: "flex",
                flexDirection: "coulm",
                padding:2,
                flexWrap:"wrap",    
            }}
            md={{
                p: 2,
                display: "flex",
                flexDirection: "row",
            
            }}>
            <Grid  item xs={12} md={4} lg={3}>
                <div className='cover-content' >
                    <img className='img' alt=" " src="https://th.bing.com/th/id/OIP.zl3PcrZaVLg5_htGHrHPAQAAAA?rs=1&pid=ImgDetMain" ></img>
                <div >
                    <h3 >User Name</h3>
                    <p >User ID</p>
                </div>
                </div>
            </Grid>
            <Box className='cover-button'>
                <Button className='btn' href=" " variant="contained"  color="warning" style={{margin:10}}><span>More</span></Button>
                <Button className='btn' href=" " variant="contained" color="primary" style={{margin:10}}>Edit</Button>
            </Box> 
        </Paper>
</>)};

export default User;