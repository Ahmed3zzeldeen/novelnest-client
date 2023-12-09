import React from 'react'
import { useParams } from 'react-router-dom';
import { Avatar, Box, TextField , Button , Modal , Typography } from '@mui/material'

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

function OneUser() {
  const { id } = useParams(); // Extracting the 'id' parameter from the URL

  // TODO: find the user & handle the Not Found page
  let User = {
    _id: "656e9f4530582a6fc08609d0",
    firstName: "Ahmed",
    lastName: "Ezzeldeen",
    email: "ahmed1@gmail.com",
    username: "ahmed1",
    role: "USER",
    avatar: "uploads/profile.png",
    password: "1234",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFobWVkMUBnbWFpbC5jb20iLCJpZCI6IjY1NmU5ZjQ1MzA1ODJhNmZjMDg2MDlkMCIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzAxNzQ4NTQ5LCJleHAiOjE3MDE4MzQ5NDl9.qi9mru8PfGZ1sKygy4lPmibthgDKzQa85KPASzryEec"
  };

  User.avatar = "localhost:8000/" + User.avatar;
  const [open, setOpen] = React.useState(false);
  const [isDisable, setIsDisable] = React.useState(true);
  const [data, setData] = React.useState({...User});
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDelete = () => {
    
    // TODO: Enter your logic here
    handleClose();
    console.log("delete is done")
  }
  const handleSave = () => {
    // TODO: Enter your logic here
    console.log("User Updated done")
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
            You want to delete this User
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            <Button size='small' onClick={handleDelete} variant="contained" color="error">Yes</Button>
            <Button size='small' onClick={handleClose} variant="contained" color="primary">No</Button>
          </Box>
        </Box>
      </Modal>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "90%" }}>
        <Avatar sx={{ width: "200px", minHeight: "200px", mb: 6 }} alt={User.firstName} src={User.avatar} />
        <Box sx={{ display: "flex", flexWrap: 'wrap', flexDirection: "column", width: "100%" }}>
          <Box sx={{ display: "flex", gap: 2, flexWrap: 'wrap', width: "100%", justifyContent: "center" }}>
            <TextField
              disabled={isDisable}
              id="firstName"
              placeholder={User.firstName}
              type='text'
            />
            <TextField
              disabled={isDisable}
              id="lastName"
              placeholder={User.lastName}
            />
            <TextField
              disabled={isDisable}
              id="username"
              placeholder={User.username}
            />
            <TextField
              disabled={isDisable}
              id="email"
              placeholder={User.email}
            />
            <TextField
              disabled={isDisable}
              id="password"
              type='password'
              placeholder={User.password}
            />
            <TextField
              disabled={isDisable}
              id="role"
              placeholder={User.role}
              type='text'
            />
          </Box>
          <Box sx={{mt:2, display: "flex", gap:2, width: "100%", justifyContent: "center" }}>
            <Button size='small' onClick={handleOpen} variant="contained" color="error">Delete</Button>
            {isDisable ?  <Button size='small' onClick={()=>{setIsDisable(false)}} variant="contained" color="primary">Edit</Button>
            :<Button size='small' onClick={()=>{
                setIsDisable(true)
                handleSave()
              }} variant="contained" color="success">Save</Button>
            }
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default OneUser;