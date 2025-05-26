import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import {
  Box,
  Breadcrumbs,
  Divider,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function Shop() {
  const store = useSelector((store) => store.data);
  const [products, setProducts] = useState(null);
  const [filter, setFilter] = useState({
    category: "all",
    sort: "Cheapest",
  });
  useEffect(()=>{
    let  filteredProducts = [...store.products];
     if(filter.category !== "all"){
      filteredProducts = filteredProducts.filter((item)=>item.categoryName === filter.category)
     }

     filteredProducts.sort((a,b)=>{
      const PriceA = a.salePrice || a.price;
      const PriceB = b.salePrice || b.price;
      if(filter.sort === "Cheapest"){
        return PriceA - PriceB;
      }else if(filter.sort === "Most Expensive"){
        return PriceB - PriceA;
      }
      return 0;
     })

     setProducts(filteredProducts);

  },[store.products, filter])


  return (
    <Box>
      {/* Breadcrumb */}
      <Breadcrumbs
        sx={{
          padding: 2,
          color: "#2196f3",
          fontWeight: "bold",
          textTransform: "capitalize",
          textDecoration: "underline",
          gap: 1,
        }}
      >
        <Link sx={{ textDecoration: "underline" }} to="/">
          Home
        </Link>
        /<Typography>Shop</Typography>
      </Breadcrumbs>
      {/* Filter */}
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Box sx={{ padding: 2, display: "flex", gap: 2, alignItems: "center" }}>
          <Typography>Category</Typography>
          <Select
            sx={{ width: "100px" }}
            value={filter.category}
            onChange={(e) => setFilter({ ...filter, category: e.target.value })}
          >
            <MenuItem value="all" defaultChecked>
              All
            </MenuItem>
            <MenuItem value="Dresses">Dresses</MenuItem>
            <MenuItem value="Tops">Tops & Blouses</MenuItem>
            <MenuItem value="Skirts">Skirts</MenuItem>
            <MenuItem value="Jeans">Jeans & Pants</MenuItem>
          </Select>
        </Box>
        <Box sx={{ padding: 2, display: "flex", gap: 2, alignItems: "center" }}>
          <Typography>Sort by</Typography>
          <Select
            sx={{ width: "100px" }}
            value={filter.sort}
            onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
          >
            <MenuItem value="Cheapest" defaultChecked>
              Cheapest
            </MenuItem>
            <MenuItem value="Most Expensive">Most Expensive</MenuItem>
          </Select>
        </Box>
      </Box>
      <Divider />
      {/* Products */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "start",
          padding: 2,
        }}
      >
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              image={product.image}
              price={product.price}
              salePrice={product.salePrice}
              rating={product.rating}
            />
          ))}
      </Box>
    </Box>
  );
}

export default Shop;
