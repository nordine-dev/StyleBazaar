import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
  });
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: 4,
          marginTop: 4,
        }}
      >
        Checkout
      </Typography>
      <Box sx={{ 
        border: "1px solid #ccc", 
        padding: 2, 
        borderRadius: 2, 
        boxShadow: 2 , 
        maxWidth: "500px",
        margin: "0 auto",
      }}>
        <FormControl sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <FormLabel>Shipping Address</FormLabel>
          <TextField
            label="Name"
            variant="outlined"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            fullWidth
          />
          <TextField
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            fullWidth
          />
          <TextField
            label="Address"
            variant="outlined"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            fullWidth
          />
          <TextField
            label="City"
            variant="outlined"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            fullWidth
          />
          {/* Payment Method */}
          <RadioGroup>
            <FormLabel>Payment Method</FormLabel>
            <FormControlLabel
              value="credit"
              control={<Radio />}
              label="Credit Card"
            />
            <FormControlLabel
              value="paypal"
              control={<Radio />}
              label="Paypal"
            />
          </RadioGroup>
        </FormControl>
        <Button  variant="contained" color="primary" sx={{ width: "100%", marginTop: 2 }}>
          Checkout
        </Button>
      </Box>
    </Box>
  );
}

export default Checkout;
