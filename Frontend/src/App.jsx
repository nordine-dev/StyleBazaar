import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Cart from "./pages/cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/login";
import { Box, createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Montserrat",
    },
    palette:{
      primary:{
        main: "#606c38"
      },
      secondary:{
        main:"#bc6c25"
      }
    }
  });
  return (
    <>
      <ThemeProvider theme={theme} >
        <Header />
        <Box component="main" sx={{minHeight:"100vh", maxWidth:"1200px", margin:"0 auto", padding:"0 20px"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </Box>
        
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
