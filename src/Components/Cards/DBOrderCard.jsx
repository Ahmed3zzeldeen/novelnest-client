import React from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ActionBtns } from "./../index";

import { Card, Avatar, Typography } from '@mui/material';

function DBOrderCard({ Order }) {
  Order = {
    _id: "6572074d3bd7586712f80f38",
    books: [
      {
        "BookName": "book2",
        "Author": "Mustafa",
        "ISBN": "1010101",
        "BookPrice": 100,
        "NoPages": 200,
        "BookCover": "cover2",
        "BookCategory": "Science",
        "Rate": 5,
        "Replyno": 10
      }
    ],
    total_payment: 100,
    user_id: "657140023a928932a74d380f",
    order_status: "pending",
    user_name: "Ahmed3zzeldeen",
    order_date: "2023-12-07T17:56:29.227Z",
    duration_in_mins: 10,
    createdAt: "2023-12-07T17:56:29.227Z",
    updatedAt: "2023-12-07T17:56:29.227Z",
  };
  let { _id, user_name, total_payment, order_status } = Order;
  return (
    <Card
      sx={{ m: 2, p: 2, display: "flex", gap:4}}
      md={{ p: 2, display: "flex", flexDirection: "row", height: 100 }}>
      <Box>
        <Typography variant="p" color="initial"><b>Username:</b> <br/> {user_name}</Typography>
        <ActionBtns id={_id} RouteTo="Order" canEdit={false} />
      </Box>
      <Box sx={{display:"flex" , flexDirection:"column" ,justifyContent:"space-between"}}>
        <Typography variant="p" color="initial"><b>Total Price:</b> <br/> ${total_payment}</Typography>
        <Typography variant="p" color="initial"><b>State:</b> {order_status}</Typography>
      </Box>
    </Card>
  )
}

export default DBOrderCard;