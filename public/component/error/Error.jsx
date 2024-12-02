/**
 * Error, a React component of HollyWeb
 * @module components/error/Error
 */

import ErrorIcon from "@mui/icons-material/Error";
import { Typography } from "@mui/material";
import React from "react";
import { useRouteError } from "react-router-dom";

import { ColumnFlexBoxCC } from "../common/Common";

/**
 * Define Error, a React component of HollyWeb
 * @function Error
 * @returns Error component when error occurs
 * @static
 */
export default function Error() {
  const error = useRouteError();
  console.error("Error:", error);
  return (
    <ColumnFlexBoxCC
      component="div"
      sx={{
        pt: "30vh",
      }}
    >
      <ErrorIcon
        fontSize="large"
        sx={{ my: 1, color: (theme) => theme.palette.error.main }}
      />
      <Typography
        align="center"
        sx={{ color: (theme) => theme.palette.text.main }}
        variant="error"
      >
        {error.statusText || error.message}
      </Typography>
    </ColumnFlexBoxCC>
  );
}
