import React from "react";
import SwiperSlider from "../components/SwiperSlider";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

function Home() {
  const store = useSelector((store)=> store)

  console.log(store);
  return (
    <Box>
      <SwiperSlider />
      <Box>
        <Typography variant="h4">Welcome to our store</Typography>
      </Box>
    </Box>
  );
}

export default Home;
