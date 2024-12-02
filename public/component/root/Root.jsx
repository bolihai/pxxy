import React from "react";

import { Typography, Box } from "@mui/material";
import { Outlet } from "react-router-dom";

/**
 * 根组件的 loader
 */
export async function loader() {
  return {};
}
export default function Root() {
  return (
    <Box style={{ border: "1px solid red" }}>
      <Box>
        <Typography>头部</Typography>
      </Box>
      <Outlet />
    </Box>
  );
}
