import React from 'react'
import { useParams } from 'react-router-dom';
import { Avatar, Box, TextField, Button, Modal, Typography } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #1976d2',
  boxShadow: 24,
  p: 4,
};

function DBOneBook() {
  const { id } = useParams(); // Extracting the 'id' parameter from the URL

  // TODO: find the Book & handle the Not Found page
  let Book = {
    BookName: "The Alchemist",
    Author: "Paulo Coelho",
    ISBN: 9780062315007,
    BookPrice: 10,
    NoPages: 208,
    BookCover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
    BookCategory: "Fiction",
    Rate: 4,
    Replyno: 0
  };
  Book.BookCover = "localhost:8000/" + Book.BookCover;  // FIXME: upadate the BaseURL
  const [open, setOpen] = React.useState(false);
  const [isDisable, setIsDisable] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDelete = () => {
    // TODO: Enter your logic here
    handleClose();
    console.log("delete is done")
  }
  const handleSave = () => {
    // TODO: Enter your logic here
    console.log("Book Updated done")
  }
  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" color="#1976d2" variant="h6" component="h2">
            Are you sure?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You want to delete this Book
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            <Button size='small' onClick={handleDelete} variant="contained" color="error">Yes</Button>
            <Button size='small' onClick={handleClose} variant="contained" color="primary">No</Button>
          </Box>
        </Box>
      </Modal>
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", alignItems: "center", width: "90%" }}>
        <Avatar variant='square' sx={{ width: "250px", minHeight: "300px", mb: 6 }} alt={Book.BookName} src={Book.BookCover} />
        <Box sx={{ display: "flex", flexWrap: 'wrap', maxWidth: "600px" }}>
          <Box sx={{ display: "flex", gap: 2, flexWrap: 'wrap', width: "100%", justifyContent: "center" }}>
            <TextField
              disabled={isDisable}
              id="BookName"
              placeholder={Book.BookName}
              type='text'

            />
            <TextField
              disabled={isDisable}
              id="Author"
              placeholder={Book.Author}
              type='text'
            />
            <TextField
              type='text'
              disabled={isDisable}
              id="BookPrice"
              placeholder={Book.BookPrice}
            />
            <TextField
              type='text'
              disabled={isDisable}
              id="NoPages"
              placeholder={Book.NoPages}
            />
            <TextField
              id="BookCover"
              disabled={isDisable}
              type='text'
              placeholder={Book.BookCover}
            />
            <TextField
              disabled={isDisable}
              id="BookCategory"
              type='text'
              placeholder={Book.BookCategory}
            />
          </Box>
          <Box sx={{ mt: 2, display: "flex", gap: 2, width: "100%", justifyContent: "center" }}>
            <Button size='small' onClick={handleOpen} variant="contained" color="error">Delete</Button>
            {isDisable ? <Button size='small' onClick={() => { setIsDisable(false) }} variant="contained" color="primary">Edit</Button>
              : <Button size='small' onClick={() => {
                setIsDisable(true)
                handleSave()
              }} variant="contained" color="success">Save</Button>
            }
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default DBOneBook;