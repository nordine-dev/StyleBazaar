import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: 4,
          marginTop: 4,
        }}
      >
        Cart
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" , gap: 5, flexWrap: "wrap"}}>
        {/* Cart Item */}
        <Box sx={{ flexGrow: 1}}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>img</TableCell>
                  <TableCell>34$</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>68$</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {/* Cart Summary */}

        <Box sx={{ width: "500px", border: "1px solid #ccc", padding: 2, borderRadius: 2, boxShadow: 2 , margin: 2}}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>Cart Summary</Typography>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>Total Items: 2</Typography>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>Total Price: 100$</Typography>
          <Link to="/checkout">
            <Button variant="contained" color="primary" sx={{ width: "100%" }}>
              Checkout
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
