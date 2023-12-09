import React from 'react'
import { Card, Avatar, Typography } from '@mui/material';
import {ActionBtns} from "./../index";

function DBBookCard({Book}) {
    // FIXME: Delete this dammy data
  Book = { 
    "BookName":"The Alchemist",
    "Author": "Paulo Coelho",
    "ISBN": 9780062315007,
    "BookPrice": 10,
    "NoPages": 208,
    "BookCover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
    "BookCategory": "Fiction",
    "Rate": 4,
    "Replyno": 0
};
  let { BookName , Author , ISBN , BookPrice , NoPages , BookCover , BookCategory , Rate , Replyno } = Book;
  BookCover = "localhost:8000/"+BookCover;  // FIXME: upadate the BaseURL
  return (
    <Card
      sx={{ m:2, p: 2, display: "flex", flexDirection: "column" , justifyContent:"center" , alignItems:"center", width:"200px"}}
      md={{ p: 2, display: "flex", flexDirection: "row", height: 100 }}>      
        <Avatar sx={{width:"150px" , minHeight:"200px" , mb:2 }} variant='square' alt={BookName} src={BookCover} />
        <Typography variant="p" color="initial" component="b">{BookName}</Typography>
        <Typography variant="p" color="initial" >By {Author}</Typography>
        <ActionBtns id={ISBN} RouteTo="Book" />
    </Card>
  )
}

export default DBBookCard;