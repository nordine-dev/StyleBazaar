import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

function Orders() {
  return (
    <Box>
        <Typography variant='h4' sx={{textAlign: "center", fontWeight: "bold"}}>
            Orders
        </Typography>
        <TableContainer >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>$20.00</TableCell>
                        <TableCell>Shipped</TableCell>
                        <TableCell>2023-10-01</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Another Product</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>$15.00</TableCell>
                        <TableCell>Pending</TableCell>
                        <TableCell>2023-10-02</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
  )
}

export default Orders