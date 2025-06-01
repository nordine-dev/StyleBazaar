import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { getUser } from "../context/actions/userActons";

function RequireAuth() {
  const { user, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUser());
  },[dispatch])


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
  } else {
    return user ? <Outlet /> : <Navigate to="/login" replace />;
  }
}

export default RequireAuth;
