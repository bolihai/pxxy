import ErrorIcon from "@mui/icons-material/Error";
import { Typography } from "@mui/material";
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { ColumnFlexBoxCC } from "../common/Common";

export default function RootError() {
  const error = useRouteError();
  console.error("Root error:", error);

  return (
    <ColumnFlexBoxCC
      sx={{
        paddingTop: "20vh",
      }}
    >
      <ErrorIcon fontSize="large" sx={{ my: "2vw", color: "red", mr: "1vw" }} />
      <Typography variant="error">
        <i>{error.statusText || error.message}</i>
      </Typography>
      <p>
        <Link to="/">返回主页</Link>.
      </p>
    </ColumnFlexBoxCC>
  );
}
