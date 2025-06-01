import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Slider({
  title,
  description,
  btnText,
  BtnLink,
  image,
  bgColor,
  isAnimating,
}) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const btnRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (isAnimating) {
      const tl = gsap.timeline();
      tl.from(
        titleRef.current,
        {
          opacity: 0,
          duration: 1,
          y: 100,
          ease: "power1.inOut",
        },
        "first"
      );
      tl.from(descriptionRef.current, {
        opacity: 0,
        duration: 0.5,
        y: 100,
        ease: "power1.inOut",
      });
      tl.from(btnRef.current, {
        opacity: 0,
        duration: 0.5,
        y: 100,
        ease: "power1.inOut",
      });
      tl.from(
        imageRef.current,
        {
          opacity: 0,
          duration: 2,
          y: -200,
          ease: "power1.inOut",
        },
        "first"
      );

      tl.eventCallback("onComplete", () => {
        gsap.set(
          [
            titleRef.current,
            descriptionRef.current,
            btnRef.current,
            imageRef.current,
          ],
          {
            clearProps: "all",
          }
        );
      });
    }
  }, [isAnimating]);
  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        height: { xs: "300px", sm: "600px" },
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "50%" },
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          gap: 2,
          position: { xs:"absolute", sm: "relative"},
          left: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <Typography
          ref={titleRef}
          variant="h2"
          sx={{ fontWeight: "bold", fontSize: { xs: "20px", sm: "50px" } }}
        >
          {title}
        </Typography>
        <Typography
          ref={descriptionRef}
          variant="body1"
          sx={{ fontSize: { sx: "16px", sm: "25px"} }}
        >
          {description}
        </Typography>
        <Button
          ref={btnRef}
          variant="contained"
          color="primary"
          href={BtnLink}
          sx={{ fontSize: { xs: "16px", sm: "20px" }}}
        >
          {btnText}
        </Button>
      </Box>
      <Box sx={{overflow: "hidden" ,  height: "100%", width:{ xs: "300px", sm: "600px"}, position: { xs: "absolute", sm: "relative" }, right: 0, top: 0, zIndex: 0 }}>
        <img
          ref={imageRef}
          src={image}
          alt={title}
          maxWidth="100%"
          height={"auto"}
          sx={{ objectFit: "cover", width:{ sx: "200px", sm: "600px" } }}
        />
      </Box>
    </Box>
  );
}

export default Slider;
