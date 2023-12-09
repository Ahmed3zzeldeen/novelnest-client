import React from 'react';
import { Typography, Card, CardContent, Box, Avatar, Rating } from '@mui/material';
import AddToCardBtns from "./../../Components/AddToCardBtns/AddToCardBtns";
import { useParams } from 'react-router-dom';

function OneBook() {
  const { id } = useParams();
  const [value, setValue] = React.useState(2);
  // TODO: find the Book & handle the Not Found page
  // user the id to find
  let Book = {
    BookName: "The Alchemist",
    Author: "Paulo Coelho",
    ISBN: 9780062315007,
    BookPrice: 10,
    NoPages: 208,
    BookCover: "https://mui.com//static/images/avatar/1.jpg",
    BookCategory: "Fiction",
    Description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis modi in quaerat, aspernatur quos labore sit alias rerum minus mollitia, voluptatibus aliquam debitis neque quis necessitatibus cumque distinctio officia fugit!",
    Rate: 4,
    Replyno: 0
    
  };
  // Book.BookCover = "localhost:8000/" + Book.BookCover;  // FIXME: upadate the BaseURL

  return (
    <Card sx={{display:"flex", justifyContent:"space-around" , flexWrap:"wrap"}}>
      <Box sx={{m:4}}>
        <Avatar variant='square' sx={{ width: "300px", minHeight: "400px", mb: 2 }} alt={Book.BookName} src={Book.BookCover+""} />
        <AddToCardBtns itemId={Book.ISBN} />
      </Box>
      <CardContent sx={{display:"flex", flexDirection:"column", minWidth:"300px" ,maxWidth:"500px" , mt:8}}>
        <Typography variant="h3" component="h2">
          Name: {Book.BookName}
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom >
          Author: {Book.Author}
        </Typography>
        <Typography variant="body2" component="p">
          Number of pages: {Book.NoPages}
        </Typography>
        <Typography variant="h6" component="p">
          Category: {Book.BookCategory}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, mt: 2 , mb:2 }}>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography variant="p" color="initial" >by {Book.Replyno}</Typography>
        </Box>
        <Typography variant="p" component="p">
          Description: {Book.Description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default OneBook;