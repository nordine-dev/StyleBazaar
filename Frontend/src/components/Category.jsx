import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Category({ img, title, link }) {
  return (
    <Box>
      <Link to={link}>
        <Box
          sx={{
            position: "relative",
            width: "200px",
            height: "200px",
            overflow: "hidden",
            borderRadius: "100px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
            }}
          ></Box>
          <Box
            component={"img"}
            src={img}
            alt={title}
            width={200}
            height={200}
            sx={{ objectFit: "cover" }}
          />
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}

export default Category;
