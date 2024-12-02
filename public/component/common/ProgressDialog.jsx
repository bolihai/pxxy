// import packages
import { CircularProgress, Dialog, DialogTitle } from "@mui/material";
import React from "react";
import { ColumnFlexBoxCC } from "./Common";

/**
 * ProgressDialog component
 * @returns
 */
export default function ProgressDialog({ loading, title }) {
  title = title || "操作进行中……";
  return (
    <Dialog
      open={loading}
      disableEscapeKeyDown={false}
      aria-describedby="circular-progress-dialog"
    >
      <DialogTitle
        id="progress-dialog"
        align="center"
        sx={{
          color: (theme) => theme.palette.text.main,
        }}
      >
        {title}
      </DialogTitle>
      <ColumnFlexBoxCC sx={{ minWidth: 180, height: 120 }}>
        <CircularProgress sx={{ mb: 4 }} size="60px" />
      </ColumnFlexBoxCC>
    </Dialog>
  );
}
