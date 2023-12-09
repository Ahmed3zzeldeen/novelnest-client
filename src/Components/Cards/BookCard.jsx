import React from 'react'
import { Typography, Avatar, Card, Rating, Box } from '@mui/material';
import AddToCardBtns from '../AddToCardBtns/AddToCardBtns';
import * as ROUTE from "./../../Constants/routes";

function BookCard({ Book }) {
  const [value, setValue] = React.useState(2);
  // FIXME: Delete this dammy data
  Book = {
    "BookName": "The Alchemist",
    "Author": "Paulo Coelho",
    "ISBN": 9780062315007,
    "BookPrice": 10,
    "NoPages": 208,
    "BookCover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
    "BookCategory": "Fiction",
    "Rate": 4,
    "Replyno": 172
  };
  let { BookName, Author, ISBN, BookPrice, NoPages, BookCover, BookCategory, Rate, Replyno } = Book;
  BookCover = "localhost:8000/" + BookCover;  // FIXME: upadate the BaseURL
  return (
    <Card
      sx={{ m: 2, p: 2, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "250px" }}
      md={{ p: 2, height: 100 }}>
      <Avatar sx={{ width: "200px", minHeight: "250px", mb: 2 }} variant='square' alt={BookName} src={BookCover} />
      <Typography variant="p" color="initial" component="a" href={ROUTE.ONE_BOOK_L+ISBN}>{BookName}</Typography>
      <Typography variant="p" color="initial" >Author: {Author}</Typography>
      <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography variant="p" color="initial" >by {Replyno}</Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
        <Typography variant="p" color="initial" >Category: {BookCategory}</Typography>
        <Typography variant="p" color="violet" component="b" >{BookPrice}$</Typography>
      </Box>
      <AddToCardBtns itemId={ISBN} />
    </Card>
  )
}

export default BookCard