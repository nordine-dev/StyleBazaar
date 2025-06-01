import {
  Box,
  Breadcrumbs,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import AddToCartCard from "./AddToCartCard";

const backendUri = import.meta.env.VITE_BACKEND_URI;

function Product() {
  const { title } = useParams();
  const [product, setProduct] = useState(null);
  const store = useSelector((store) => store.data);

  useEffect(() => {
    const productFiler = store.products.find((item) => item.name == title);
    setProduct(productFiler);
  }, [title, store.products]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 2 }}>
      {/* Breadcrumb */}
      <Breadcrumbs
        sx={{
          color: "#2196f3",
          fontWeight: "bold",
          textTransform: "capitalize",
          textDecoration: "underline",
          gap: 1,
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link
          sx={{ textDecoration: "underline", color: "#2196f3" }}
          to={`/shop/${title}`}
        >
          {title}
        </Link>
      </Breadcrumbs>
      {/* Product Details */}
      {product && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              border: "1px solid #ccc",
              padding: 2,
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            <img
              src={`${backendUri}/${product.image}`}
              alt={product.name}
              width={700}
              height={700}
              sx={{ objectFit: "contain" }}
            />
          </Box>
          <AddToCartCard product={product} />
        </Box>
      )}
    </Box>
  );
}

export default Product;
