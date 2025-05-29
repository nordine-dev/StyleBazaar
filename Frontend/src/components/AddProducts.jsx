import { Box, Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";

function AddProducts() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: null,
  });

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 600,
        margin: "auto",
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        gap: 2
      }}
    >
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
            Add Product
        </Typography>
      <TextField
        label="Product Name"
        variant="outlined"
        fullWidth
        value={product.name}
        onchange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <TextField
        label="Price"
        variant="outlined"
        fullWidth
        type="number"
        value={product.price}
        onchange={(e) => setProduct({ ...product, price: e.target.value })}
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={product.description}
        onchange={(e) =>
          setProduct({ ...product, description: e.target.value })
        }
      />
      {/* categorie options */}
      <Select
        onchange={(e) => setProduct({ ...product, category: e.target.value })}
        value={product.category}
        fullWidth
      >
        <MenuItem value="" disabled>
          Select category
        </MenuItem>
        <MenuItem value="electronics">Electronics</MenuItem>
        <MenuItem value="clothing">Clothing</MenuItem>
        <MenuItem value="home_appliances">Home Appliances</MenuItem>
        <MenuItem value="books">Books</MenuItem>
      </Select>
      
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => {
          // Handle product submission logic here
          console.log("Product added:", product);
        }}
      >
        Add Product
      </Button>
    </Box>
  );
}

export default AddProducts;
