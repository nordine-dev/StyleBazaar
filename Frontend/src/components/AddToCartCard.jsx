import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../context/actions/cartActions";

function AddToCartCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const store = useSelector((store) => store.cart);
  console.log("Store:", store);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        border: "1px solid #ccc",
        padding: 2,
        borderRadius: 2,
        boxShadow: 2,
        flexGrow: 1,
      }}
    >
      <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        {product.name}
      </Typography>
      <Rating value={product.rating} readOnly />
      <Box>
        {product.salePrice ? (
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                color: "green",
              }}
            >
              {product.salePrice}
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                color: "red",
                textDecoration: "line-through",
              }}
            >
              {product.price}
            </Typography>
          </Box>
        ) : (
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              color: "green",
            }}
          >
            {product.price}
          </Typography>
        )}
      </Box>
      <Typography>{product.description}</Typography>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Button onClick={() => setQuantity(quantity == 1 ? 1: quantity - 1)} variant="contained" color="primary">
            -
          </Button>
          <TextField
            type="number"
            sx={{ width: "70px", textAlign: "center" }}
            size="small"
            InputProps={{ inputProps: { min: 1, max: 10 } }}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            readOnly
          />
          <Button onClick={() => setQuantity(quantity == 10 ? 10 : quantity + 1)} variant="contained" color="primary">
            +
          </Button>
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "300px", fontSize: "1rem" }}
          onClick={()=>{
            dispatch(addToCart({...product, quantity}));
          }}

        >
          Add to cart
        </Button>
      </Box>
      <Box>
        <Typography>{product.category}</Typography>
      </Box>

      <Typography>category: {product.categoryName}</Typography>
    </Box>
  );
}

export default AddToCartCard;
