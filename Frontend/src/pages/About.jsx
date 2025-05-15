import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import aboutImage from "../../public/img/about.png";

function About() {
  return (
    <Box sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h2"> Aout us</Typography>
      <Typography variant="h6">
        Welcome to InStyleBazaar – Where Fashion Meets Elegance
      </Typography>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap:"wrap" }}>
        <Box
          sx={{
            borderRadius: "100px",
            overflow: "hidden",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
            width: "600px",
            height: "600px",
          }}
        >
          <img
            src={aboutImage}
            alt="about"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Typography sx={{ flexGrow:1, flexShrink:1, flexBasis:"50%" }}>
          At InStyleBazaar, we believe that style is a way to say who you are
          without speaking. Our mission is to bring you the latest trends in
          fashion while keeping comfort, quality, and affordability at the heart
          of everything we do. Founded with a passion for fashion and a keen eye
          for style, InStyleBazaar is more than just a clothing store – it’s a
          destination for fashion lovers who want to express their personality
          with confidence and class. Whether you're dressing up for a special
          occasion or refreshing your everyday wardrobe, we offer carefully
          curated collections that fit every mood and moment.
        </Typography>
      </Box>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        What We Offer:
      </Typography>
      {/* offer list */}
      <List>
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 1,
          }}
        >
          <ListItemText>
            Trendy and Timeless Apparel for men, women, and kids
          </ListItemText>
          <ListItemText>
            Trendy and Timeless Apparel for men, women, and kids
          </ListItemText>
          <ListItemText>
            Exceptional Customer Service – because you deserve nothing less
          </ListItemText>
        </ListItem>
      </List>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Our Vision:
        </Typography>
        <Typography>
          To be the leading online fashion destination that inspires and
          empowers people to express their unique style and confidence.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Our Mission:
        </Typography>
        <Typography>
          To provide a seamless shopping experience with a wide range of
          fashionable products that cater to diverse tastes and styles.
        </Typography>
      </Box>
    </Box>
  );
}

export default About;
