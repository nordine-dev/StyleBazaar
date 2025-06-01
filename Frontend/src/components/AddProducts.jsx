import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import toast from "react-hot-toast";

function AddProducts() {
  const [product, setProduct] = useState({
    id: Date.now(),
    name: "",
    categoryName: "",
    description: "",
    price: "",
    salePrice: "",
    rating: "",
    image: "",
  });

  const handleSubmit = () => {
    if(!product.name || !product.categoryName || !product.description || !product.price) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const formData = new FormData();
    formData.append("id", product.id);
    formData.append("name", product.name);
    formData.append("categoryName", product.categoryName);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("salePrice", product.salePrice);
    formData.append("rating", product.rating);
    formData.append("image", product.image);

    axios
      .post("/api/data/add-product", formData)
      .then((res) => {
        if (res.data.success === true) {
          toast.success("Product added successfully!");
          setProduct({
            id: Date.now(),
            name: "",
            categoryName: "",
            description: "",
            price: "",
            salePrice: "",
            rating: "",
            image: "",
          });
        }
      })
      .catch((err) => {
        toast.error("Failed to add product. Please try again.");
        console.error(err);
      });
  };
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
        gap: 2,
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
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        required
      />
      <TextField
        label="Price"
        variant="outlined"
        fullWidth
        type="number"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        required
      />
      <TextField
        label="Sale Price (Optional)"
        variant="outlined"
        type="number"
        fullWidth
        value={product.salePrice}
        onChange={(e) => setProduct({ ...product, salePrice: e.target.value })}
      />
      <TextField
        label="Description"
        variant="outlined"
        type="text"
        fullWidth
        multiline
        rows={4}
        value={product.description}
        onChange={(e) =>
          setProduct({ ...product, description: e.target.value })
        }
        required
      />
      {/* categorie options */}
      <Select
        onChange={(e) =>
          setProduct({ ...product, categoryName: e.target.value })
        }
        value={product.categoryName}
        fullWidth
        required
        variant="outlined"
      >
        <MenuItem value="" disabled>
          Select category
        </MenuItem>
        <MenuItem value="electronics">Electronics</MenuItem>
        <MenuItem value="clothing">Clothing</MenuItem>
        <MenuItem value="home_appliances">Home Appliances</MenuItem>
        <MenuItem value="books">Books</MenuItem>
      </Select>

      {!product.image && (
        <TextField
          type="file"
          fullWidth
          variant="outlined"
          onChange={(e) => {
            setProduct({
              ...product,
              image: e.target.files[0],
            });
          }}
          inputProps={{ accept: "/image/*" }}
        />
      )}
      {/* Display selected image */}
      {product.image && (
        <Box>
          <img
            src={URL.createObjectURL(product.image)}
            alt="product image"
            width={100}
          />
          <Button
            variant="outlined"
            color="error"
            startIcon={<CloseIcon />}
            onClick={() => setProduct({ ...product, image: "" })}
          >
            Remove Image
          </Button>
        </Box>
      )}

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
      >
        Add Product
      </Button>
    </Box>
  );
}

export default AddProducts;
