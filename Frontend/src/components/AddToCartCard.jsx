import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import React from "react";

function AddToCartCard({ product }) {
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
          <Button variant="contained" color="primary">
            -
          </Button>
          <TextField
            type="number"
            sx={{ width: "70px", textAlign: "center" }}
            size="small"
            inputProps={{ min: 1, max: 10 }}
            defaultValue={1}
            onChange={(value) => console.log(value)}
          />
          <Button variant="contained" color="primary">
            +
          </Button>
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "300px", fontSize: "1rem" }}
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
