/**
 * Root component
 * @module Root
 */

import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "../footer/Footer";
import TopBar from "../topBar/TopBar";

export default function Root() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: `calc(100vh)`,
        width: "100%",
        backgroundImage: `url(/assets/backgroundImage.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "black",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: 140,
        }}
      >
        <TopBar />
      </Box>

      <Box id="mainDisplay" sx={{ flexGrow: 1, flex: 1, height: "" }}>
        <Outlet />
      </Box>

      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          textAlign: "center",
          width: "100%",
          height: 40,
          zIndex: 10,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          color: "#fff",
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
}
