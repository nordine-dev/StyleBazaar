import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function Login() {
  const [formType, setFromType] = useState("Login");
  const [formData, setFromData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = () => {};
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
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
            value={formData.name}
            onChange={(e) => setFromData({ ...formData, name: e.target.value })}
            fullWidth
          />
        )}
        <TextField
          label="Email"
          value={formData.email}
          onChange={(e) => setFromData({ ...formData, email: e.target.value })}
          fullWidth
        />
        <TextField
          label="Password"
          value={formData.password}
          onChange={(e) =>
            setFromData({ ...formData, password: e.target.value })
          }
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
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
  );
}

export default Login;
