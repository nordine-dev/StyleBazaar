import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {};
  return (
    <Box sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h2" sx={{ textAlign: "center", fontWeight: "bold", marginBottom: 4, marginTop: 4 }}>
        Contact Us
      </Typography>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "space-between" }}>
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Contact Information
          </Typography>
          <Typography >Email: contact@instylebazaar.com</Typography>
          <Typography>Phone: +123 456 7890</Typography>
          <Typography>Address: 123 Main St, Anytown, USA</Typography>
        </Box>
        {/* contact form*/}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h6">Contact Form</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              fullWidth
            />
            <TextField
              label="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              fullWidth
            />
            <TextField
              label="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              fullWidth
              multiline
              rows={4}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
