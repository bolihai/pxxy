import React from "react";

import { Typography } from "@mui/material";

/**
 * 个人的 loader
 */
export async function loader() {
  return {};
}

export default function Person() {
  return <Typography>个人</Typography>;
}
