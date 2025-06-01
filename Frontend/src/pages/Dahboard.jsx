import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import Orders from '../components/Orders';
import AddProducts from '../components/AddProducts';
import Settings from '../components/Settings';


function Dahboard() {
  const [view, setView] = useState("orders");

  return (
    <Box>
        <Typography variant="h2" sx={{ textAlign: "center", fontWeight: "bold", marginBottom: 4, marginTop: 4 }}>
            Dashboard
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginBottom: 4 }}>
            <Typography
                variant="h6"
                sx={{ cursor: "pointer", color: view === "orders" ? "primary.main" : "text.secondary" }}
                onClick={() => setView("orders")}
            >
                Orders
            </Typography>
            <Typography
                variant="h6"
                sx={{ cursor: "pointer", color: view === "add_product" ? "primary.main" : "text.secondary" }}
                onClick={() => setView("add_product")}
            >
                Add Products
            </Typography>
            <Typography
                variant="h6"
                sx={{ cursor: "pointer", color: view === "settings" ? "primary.main" : "text.secondary" }}
                onClick={() => setView("settings")}
            >
                Settings
            </Typography>
        </Box>
        <Box>
            {view === "orders" && <Orders/>}
            {view === "add_product" && <AddProducts/>}
            {view === "settings" && <Settings/>}
        </Box>
    </Box>
  )
}

export default Dahboard