import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress } from "@mui/material";
import { Outlet, Navigate } from "react-router-dom";
import { getUser } from "../context/actions/userActons";

function PublicRoute() {
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
      console.log("PublicRoute user:", isLoading,user);

  }, [ ]);


  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return user ? <Navigate to="/dashboard" replace /> : <Outlet />;
}

export default PublicRoute;
