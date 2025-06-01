import React, { useEffect } from "react";
import SwiperSlider from "../components/SwiperSlider";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import { getData } from "../context/actions/dataActions";

function Home() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <Box>
      {/* Slider */}
      <SwiperSlider />
      {/* Categories */}
      {!store.data.isLoading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            marginTop: "60px",
            marginBottom: "60px",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", fontSize: "2rem"}}
          >
            Categories
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" , justifyContent: "center", alignItems: "center"}}>
            {store.data.categories.map((item) => (
              <Category
                key={item.id}
                img={item.image}
                title={item.name}
                link={`/category/${item.id}`}
              />
            ))}
          </Box>
        </Box>
      ) : (
        <Typography>IS LOADING ...</Typography>
      )}
      {/* Products */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          marginTop: "60px",
          marginBottom: "60px",
          paddingInline: "50px",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", fontSize: "2rem" }}>
          Products
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", alignItems: "center" }}>
          {store.data.products.map((item) => (
            <ProductCard
              key={item.id}
              title={item.name}
              image={item.image}
              price={item.price}
              salePrice={item.salePrice}
              rating={item.rating}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
