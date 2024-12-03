import React from "react";

import { Box, Typography } from "@mui/material";

/**
 * 登录的 loader
 */
export async function loader() {
  return {};
}

export default function Login() {
  return (
    <Box>
      <Typography style={{ fontFamily: "NotoSans" }}>登录</Typography>
    </Box>
  );
}
