import React from 'react'
import {Box , Button , Modal , Typography  } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import * as ROUTE from '../../Constants/routes';

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

function ActionBtns({ id, url, RouteTo , canEdit = true}) {
  // RouteTo {User , Book , Order} 
  let navigateURL = ROUTE.DB_ONE_USER_L+id; 
  switch (RouteTo) {
    case "User":
      navigateURL = ROUTE.DB_ONE_USER_L+id;
      break;
    case "Book":
      navigateURL = ROUTE.DB_ONE_BOOK_L+id;
      break;
    default:
      break;
  }
  // TODO: Add the Logic to send the delete action or edit to our backend
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDelete = () => {
    // TODO: Enter your logic here
    handleClose();
    console.log("delete is done")

  }
  const handleEdit = () => {
    // TODO: Enter your logic here

    console.log("move to the edit page")

  }
  return (
    <>
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
            You want to delete this {RouteTo}
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            <Button size='small' onClick={handleDelete} variant="contained" color="error">Yes</Button>
            <Button size='small' onClick={handleClose} variant="contained" color="primary">No</Button>
          </Box>
        </Box>
      </Modal>
      <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
        <Button size='small' onClick={handleOpen} variant="contained" color="error">Delete</Button>
        {canEdit ?
          <Button size='small' onClick={handleEdit} href={navigateURL} variant="contained" color="primary">Edit</Button> 
        : ""}
      </Box>
    </>
  )
}

export default ActionBtns