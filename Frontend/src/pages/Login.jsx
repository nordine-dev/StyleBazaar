import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, stopLoading } from "../context/actions/uiActions";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Login() {
  const store = useSelector((store) => store.ui);
  const dispatch = useDispatch();
  const [formType, setFromType] = useState("Login");
  const [formData, setFromData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    dispatch(setLoading());
    try {
      if (formType === "Signup") {
        const responed = await axios.post("/api/auth/register", {
          email: formData.email,
          password: formData.password,
          username: formData.username,
        });
        if (responed.data.success === true) {
          toast.success(responed.data.message);
          dispatch(stopLoading());
          setFromType("Login");
        }
      }
      if( formType === "Login"){
        const responed = await axios.post("/api/auth/login", {
          email: formData.email,
          password: formData.password
        })
        if(responed.data.success === true){
          toast.success(responed.data.message);
          dispatch(stopLoading())
          setFromData({
            email: "",
            password: "",
            username: "",
          })
        }
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong, please try again"
      );
      dispatch(stopLoading());
    }
  };
  return (

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        gap: 2,
        alignItems: "center",
        border: "1px solid #ccc",
        padding: 4,
        maxWidth: "400px",
        shadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <Box sx={{ width: "100%" }}>
        {store.isLoading && <LinearProgress sx={{ width: "100%" }} />}
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: 4,
            marginTop: 4,
          }}
        >
          {formType}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
          }}
        >
          {formType === "Signup" && (
            <TextField
              label="Name"
              value={formData.username}
              onChange={(e) =>
                setFromData({ ...formData, username: e.target.value })
              }
              fullWidth
            />
          )}
          <TextField
            label="Email"
            value={formData.email}
            onChange={(e) =>
              setFromData({ ...formData, email: e.target.value })
            }
            fullWidth
          />
          <TextField
            label="Password"
            value={formData.password}
            type={showPassword ? "text" : "password"}
            onChange={(e) =>
              setFromData({ ...formData, password: e.target.value })
            }
            fullWidth
            InputProps={{
              endAdornment:(
                <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
              )
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={store.isLoading}
          >
            {formType}
          </Button>
        </Box>
        <Box>
          <Typography>
            {formType === "Login"
              ? "Don't have an account?"
              : "Already have an account?"}
            <Typography
              variant="contained"
              sx={{ cursor: "pointer" }}
              color="primary"
              onClick={() =>
                setFromType(formType === "Login" ? "Signup" : "Login")
              }
            >
              {formType === "Login" ? "Signup" : "Login"}
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
    </Box>
  );
}

export default Login;
