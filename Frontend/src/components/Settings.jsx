import { Box, TextField, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function Settings() {
  const store = useSelector((store)=> store.user)
  console.log(store)
  const [settings, setSettings] = useState({
    name: store.user.username || "",
    email: store.user.email || "",
    password: "",
    confirmPassword: "",
  });

  const [editMode, setEditMode] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        marginTop: "60px",
        marginBottom: "60px",

      }}
    >
      <Typography>Hello, {store.user.username}</Typography>
      <Box sx={{ width: "300px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <TextField
          label="Name"
          value={settings.name}
          onchange={(e) => setSettings({ ...settings, name: e.target.value })}
          required
        />
        <TextField
          label="Email"
          value={settings.email}
          onchange={(e) => setSettings({ ...settings, email: e.target.value })}
        />
        <TextField
          label="Password"
          value={settings.password}
          type="password"
          onchange={(e) =>
            setSettings({ ...settings, password: e.target.value })
          }
        />
        <TextField
          label="Confirm Password"
          value={settings.confirmPassword}
          type="password"
          onchange={(e) =>
            setSettings({ ...settings, confirmPassword: e.target.value })
          }
        />
        {editMode ? (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setEditMode(false)}
          >
            Save Changes
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setEditMode(true)}
          >
            Edit Settings
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default Settings;
