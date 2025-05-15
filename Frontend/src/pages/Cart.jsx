import { Box, Typography } from '@mui/material'
import React from 'react'

function Cart() {
  return (
    <Box>
      <Typography variant="h2" sx={{ textAlign: "center", fontWeight: "bold", marginBottom: 4, marginTop: 4 }}>
        Cart
      </Typography>
      <Box>
        <Box>
          {/* Cart Item */}
          <Box>
            {/* <img src={item.image} alt={item.name} /> */}
          </Box>
          <Box>
            <Typography>Product name</Typography>
            <Typography>Price</Typography>
            <Typography>Quantity</Typography>
          </Box>
        </Box>
        <Box>
          {/* Cart Summary */}

        </Box>
        </Box>
    </Box>
  )
}

export default Cart