import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import {
  removeFromCart,
  upadedCartItems,
} from "../context/actions/cartActions";

function Cart() {
  const dispatch = useDispatch();

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const store = useSelector((store) => store.cart);

  useEffect(() => {
    setCartItems(store.cartItem);
    setTotalPrice(store.totalPrice);
  }, [store]);

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
      {cartItems.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 5,
            flexWrap: "wrap",
          }}
        >
          {/* Cart Item */}
          <Box sx={{ flexGrow: 1 }}>
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
                  {cartItems.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.salePrice ? item.salePrice : item.price}$</TableCell>
                      <TableCell>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Button onClick={()=> dispatch(upadedCartItems(item.id, item.quantity + 1))}>
                            +
                          </Button>
                          <TextField
                            value={item.quantity}
                            inputProps={{ min: 1, max: 10 }}
                            type="number"
                            variant="outlined"
                            size="small"
                            sx={{ width: "80px" }}
                            readOnly
                          />
                          <Button onClick={()=> dispatch(upadedCartItems(item.id, item.quantity - 1))} disabled={item.quantity <= 1}>
                            -
                          </Button>
                        </Box>
                      </TableCell>
                      <TableCell>{(item.salePrice ? item.salePrice : item.price) * item.quantity}$</TableCell>
                      <TableCell>
                        <Button
                          variant="oulined"
                          color="error"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          <CloseIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          {/* Cart Summary */}

          <Box
            sx={{
              width: "500px",
              border: "1px solid #ccc",
              padding: 2,
              borderRadius: 2,
              boxShadow: 2,
              margin: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              Cart Summary
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Total Items: {store.totalItems}
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Total Price: {totalPrice.toFixed(2)}$
            </Typography>
            <Link to="/checkout">
              <Button
                variant="contained"
                color="primary"
                sx={{ width: "100%" }}
              >
                Checkout
              </Button>
            </Link>
          </Box>
        </Box>
      ) : (
        <Box sx={{ textAlign: "center", marginTop: 4 }}>
          <Typography variant="h4" sx={{ textAlign: "center", marginTop: 4 }}>
            Your cart is empty
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ textAlign: "center", marginTop: 2 }}
          >
            <Link to="/shop">Go to Products</Link>
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Cart;
