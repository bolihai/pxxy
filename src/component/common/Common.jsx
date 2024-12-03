import React from "react";

import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

/**
 * Flex box container
 * @param {string} ff - flexFlow
 * @param {string} jc - justifyContent
 * @param {string} ai - alignItems
 * @returns
 */
function flexBox(ff, jc, ai) {
  return styled(Box)({
    display: "flex",
    flexFlow: ff,
    justifyContent: jc,
    alignItems: ai,
  });
}

/**
 * Flex box: column nowrap, flex-start, flex-start
 */
export const ColumnFlexBoxSS = flexBox(
  "column nowrap",
  "flex-start",
  "flex-start"
);

/**
 * Flex box: column nowrap, center, flex-start
 */
export const ColumnFlexBoxCS = flexBox("column nowrap", "center", "flex-start");

/**
 * Flex box: column nowrap, center, flex-start
 */
export const ColumnFlexBoxBC = flexBox(
  "column nowrap",
  "space-between",
  "center"
);

/**
 * Flex box: column nowrap, flex-start, center
 */
export const ColumnFlexBoxSC = flexBox("column nowrap", "flex-start", "center");

/**
 * Flex box: column nowrap, center, center
 */
export const ColumnFlexBoxCC = flexBox("column nowrap", "center", "center");

/**
 * Flex box: column nowrap, flex-start, flex-end
 */
export const ColumnFlexBoxSE = flexBox(
  "column nowrap",
  "flex-start",
  "flex-end"
);

/**
 * Flex box: column nowrap, space-around, center
 */
export const ColumnFlexBoxAC = flexBox(
  "column nowrap",
  "space-around",
  "center"
);

/**
 * Flex box: column nowrap, space-around, flex-end
 */
export const ColumnFlexBoxAE = flexBox(
  "column nowrap",
  "space-around",
  "flex-end"
);

/**
 * Flex box: row nowrap, flex-start, flex-start
 */
export const RowFlexBoxSS = flexBox("row nowrap", "flex-start", "flex-start");

/**
 * Flex box: row nowrap, center, flex-start
 */
export const RowFlexBoxCS = flexBox("row nowrap", "center", "flex-start");

/**
 * Flex box: row nowrap, flex-start, center
 */
export const RowFlexBoxSC = flexBox("row nowrap", "flex-start", "center");

/**
 * Flex box: row nowrap, space-between, flex-end
 */
export const RowFlexBoxBE = flexBox("row nowrap", "space-between", "flex-end");

/**
 * Flex box: row nowrap, space-between, center
 */
export const RowFlexBoxBC = flexBox("row nowrap", "space-between", "center");

/**
 * Flex box: row nowrap, flex-start, flex-end
 */
export const RowFlexBoxSE = flexBox("row nowrap", "flex-start", "flex-end");

/**
 * Flex box: row nowrap, space-around, center
 */
export const RowFlexBoxAC = flexBox("row nowrap", "space-around", "center");

/**
 * Flex box: row nowrap, space-around, flex-start
 */
export const RowFlexBoxAS = flexBox("row nowrap", "space-around", "flex-start");

/**
 * Flex box: row nowrap, flex-end, center
 */
export const RowFlexBoxEC = flexBox("row nowrap", "flex-end", "center");

/**
 * Flex box: row nowrap, center, center
 */
export const RowFlexBoxCC = flexBox("row nowrap", "center", "center");
