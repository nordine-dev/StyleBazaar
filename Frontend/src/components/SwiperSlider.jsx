import React, { useState } from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import { Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";

import Slider from "./Slider";

export default function SwiperSlider() {
  const [isAnimating, setisAnimating] = useState(false);
  return (
    <Box >
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        style={{width: "100%", height: "600px"}}
        autoplay={{
          delay: 5000,
          disableOnInteraction:false
        }}
        loop={true}
        onSlideChange={()=>{
          setisAnimating(true)
        }}
        onSlideChangeTransitionEnd={()=>{
          setisAnimating(false)
        }}
        onSlideChangeStart={()=>{
          setisAnimating(true)
        }}

      >
        <SwiperSlide>
          <Slider
            title="Discover Your Style with Our New Collection"
            description="Step into the season with our latest fashion picks for men and women — high quality, trendy, and affordable."
            btnText="Shop Now"
            BtnLink="/shop"
            image={slider1}
            bgColor="white" 
            isAnimating={isAnimating}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            title="Mid-Season Sale - Up to 50% Off!"
            description="Limited time offer! Shop your favorite styles at unbeatable prices."
            btnText="Shop the Sale"
            BtnLink="/shop"
            image={slider2}
            bgColor="white"
            isAnimating={isAnimating}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
