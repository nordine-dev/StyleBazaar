import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import SingleProduct from "./pages/SingleProduct";
import Dahboard from "./pages/Dahboard";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import RequireAuth from "./components/RequireAuth";
import store from "./context/store/store";
import IsAuth from "./components/PublicRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URI;
  axios.defaults.withCredentials = true;

  const theme = createTheme({
    typography: {
      fontFamily: "Montserrat",
    },
    palette: {
      primary: {
        main: "#606c38",
      },
      secondary: {
        main: "#bc6c25",
      },
    },
  });
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header />
          <Toaster position="top-right" reverseOrder={false} />
          <Box
            component="main"
            sx={{ maxWidth: "1600px", minHeight: "100vh", margin: "0 auto" }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/shop/:title" element={<SingleProduct />} />
              <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
              </Route>
              <Route element={<RequireAuth />}>
                <Route path="/dashboard" element={<Dahboard />} />
              </Route>
            </Routes>
          </Box>

          <Footer />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
