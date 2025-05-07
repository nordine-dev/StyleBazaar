import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../assets/logo_header.png";

function Footer() {
  return (
    <Box sx={{  py: 4, px: 2, backgroundColor:"primary.main", color:"white" }}>
      <Box sx={{display:"flex", justifyContent:"space-between", flexWrap:"wrap",gap:"20px"}}>
        {/* About Us */}
        <Box>
          
          <Box component="img" src={logo} sx={{width:"300px",height:"100px"}}></Box>
          <Typography sx={{ fontSize: "12px", maxWidth: "500px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </Typography>
        </Box>

        {/* Info Links */}
        <Box >
          <Typography variant="h6" gutterBottom>Info</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, fontSize:"12px" }}>
            <Link href="/" color="inherit" underline="hover">Home</Link>
            <Link href="/about" color="inherit" underline="hover">About</Link>
            <Link href="/contact" color="inherit" underline="hover">Contact</Link>
          </Box>
        </Box>

        {/* Contact */}
        <Box >
          <Typography variant="h6" gutterBottom>Contact Us</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 , fontSize:"12px" }}>
            <Typography variant="body2">
              <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
              +216 98 123 456
            </Typography>
            <Typography variant="body2">
              <EmailIcon fontSize="small" sx={{ mr: 1 }} />
              example@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
