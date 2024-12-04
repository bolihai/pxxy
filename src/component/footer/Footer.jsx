/**
 * Root component
 * @module Root
 */

import React from "react";
import { Outlet, redirect } from "react-router-dom";
import { Box, Paper } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // boxSizing: "border-box",
        height: "100%",
        width: "100%",
      }}
    >
      版权
    </Box>
  );
}
