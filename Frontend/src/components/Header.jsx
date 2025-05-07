import {
  AppBar,
  Badge,
  Box,
  Button,
  Drawer,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import logo from "../assets/logo_header.png";

function Header() {
  const [openMoebileMenu, setOpenMobileMenu] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMobile);
  const navItems = [
    { text: "Home", link: "/" },
    { text: "Shop", link: "/shop" },
    { text: "About", link: "/about" },
    { text: "Contact", link: "/contact" },
  ];
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            {isMobile ? (
              <Button color="inherit" onClick={() => setOpenMobileMenu(true)}>
                <MenuIcon />
              </Button>
            ) : null}
            <Link to="/">
              <Box
                component="img"
                src={logo}
                sx={{ width: "100%", height: "50px" }}
              ></Box>
            </Link>
          </Box>
          {isMobile ? null : (
            <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
              {navItems.map((item, index) => (
                <Link to={item.link} key={index}>
                  {item.text}
                </Link>
              ))}
            </Box>
          )}
          <Box style={{ display: "flex", gap: "10px" }}>
            <Link to="/login">
              <AccountCircleIcon />
            </Link>
            <Link to="/cart">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={openMoebileMenu} onClose={() => setOpenMobileMenu(false)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "250px",
            padding: "20px",
          }}
        >
          {navItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              color="inherit"
              style={{
                textDecoration: "none",
                marginInline: "10px",
                cursor: "pointer",
              }}
            >
              {item.text}
            </Link>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
}

export default Header;
