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
        height: "600px",
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "start",
          gap: 2,
        }}
      >
        <Typography
          ref={titleRef}
          variant="h2"
          sx={{ fontWeight: "bold", fontSize: "4vw" }}
        >
          {title}
        </Typography>
        <Typography
          ref={descriptionRef}
          variant="body1"
          sx={{ fontSize: "1.5vw" }}
        >
          {description}
        </Typography>
        <Button
          ref={btnRef}
          variant="contained"
          color="primary"
          href={BtnLink}
          sx={{ fontSize: "1vw" }}
        >
          {btnText}
        </Button>
      </Box>
      <Box sx={{ height: "600px", overflow: "hidden" }}>
        <img
          ref={imageRef}
          src={image}
          alt={title}
          width="600px"
          height="600px"
          style={{ objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
}

export default Slider;
