import React from 'react'
import Product from '../components/Product'
import { Box, Divider } from '@mui/material'
import AddReview from '../components/AddReview'

function SingleProduct() {
  return (
    <Box>
        <Product/>
        <Divider />
        <AddReview/>
    </Box>
  )
}

export default SingleProduct