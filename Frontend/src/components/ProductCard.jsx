import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const backendUri = import.meta.env.VITE_BACKEND_URI;

function ProductCard({ title, image, price, salePrice, rating }) {
  return (
    <Link to={`/shop/${title}`}>
      <Box
        sx={{
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          p: 2,
          boxShadow: 3,
          maxWidth: "300px",
          minWidth: "200px",
          cursor: "pointer",
          overflow: "hidden",
          transition: "all 0.3s ease",
          minHeight: "450px",
        }}
      >
        <Box sx={{ overflow: "hidden", width: "300px", height: "300px" }}>
          <Box
            component={"img"}
            src={`${backendUri}/${image}`}
            alt={title}
            sx={{
              objectFit: "cover",

              "&:hover": { transform: "scale(1.1)" },
            }}
          />
        </Box>

        <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          {title.length > 20 ? title.silce(0.2) : title}
        </Typography>
        <Box>
          {salePrice ? (
            <Box>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "1.2rem", color: "green" }}
              >
                {salePrice}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "red",
                  textDecoration: "line-through",
                }}
              >
                {price}
              </Typography>
            </Box>
          ) : (
            <Typography
              sx={{ fontWeight: "bold", fontSize: "1.2rem", color: "green" }}
            >
              {price}
            </Typography>
          )}
        </Box>
        <Rating value={rating} readOnly />
      </Box>
    </Link>
  );
}

export default ProductCard;
