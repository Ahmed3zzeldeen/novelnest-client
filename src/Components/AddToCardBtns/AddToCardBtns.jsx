import React from 'react'
import { useShoppingCart } from "./../../contexts/ShoppingCartContext";
import { Box, Button ,Typography} from '@mui/material';

function AddToCardBtns({ itemId }) {
  const { getItemsQuantity, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();

  return (
    <Box sx={{display:"flex" , gap:2 , justifyContent:"center" , alignItems:"center" , mt:2}} >
      <Button onClick={() => decreaseCartQuantity(itemId)} variant='contained' >-</Button>
      <Typography >{getItemsQuantity(itemId)}</Typography>
      <Button onClick={() => increaseCartQuantity(itemId)}  variant='contained' >+</Button>
    </Box>
  )
}

export default AddToCardBtns