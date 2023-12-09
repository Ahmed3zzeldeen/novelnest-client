import React from 'react'
import * as ROUTES from "./../../Constants/routes";
import { Card, Avatar, Typography } from '@mui/material';
import {ActionBtns} from "./../index";

function DBUserCard({User}) {
  // FIXME: Delete this dammy data
  User = {
    _id : "656e9f4530582a6fc08609d0",
    firstName : "Ahmed",
    lastName : "Ezzeldeen",
    email : "ahmed1@gmail.com",
    username : "ahmed1",
    role : "USER",
    avatar : "uploads/profile.png",
    token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFobWVkMUBnbWFpbC5jb20iLCJpZCI6IjY1NmU5ZjQ1MzA1ODJhNmZjMDg2MDlkMCIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzAxNzQ4NTQ5LCJleHAiOjE3MDE4MzQ5NDl9.qi9mru8PfGZ1sKygy4lPmibthgDKzQa85KPASzryEec"
};
  let {_id , firstName ,lastName ,email ,username ,role ,avatar ,token} = User;
  avatar = "localhost:8000/"+avatar; 
  return (
    <Card
      sx={{ m:2, p: 2, display: "flex", flexDirection: "column" , justifyContent:"center" , alignItems:"center", width:"200px"}}
      md={{ p: 2, display: "flex", flexDirection: "row", height: 100 }}>      
        <Avatar sx={{width:"150px" , minHeight:"150px" , mb:2 }} alt={firstName} src={avatar} />
        <Typography variant="p" color="initial" component="a" href={ROUTES.DB_ONE_USER_L+_id} sx={{fontWeight:"Bold" , textDecoration:"none", ":hover":{ color:"#1976d2"}}}>{firstName+" "+lastName}  </Typography>
        <Typography variant="p" color="initial" >User Role {role}</Typography>
        <ActionBtns id={_id} RouteTo="User" />
    </Card>
  )
}

export default DBUserCard;