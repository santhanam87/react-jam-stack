"use client";
import { styled } from "@mui/material";

export const DGTable = styled("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderTop: "1px solid",
  borderRight: "1px solid",
});
export const DGTableHeader = styled("div")({
  flex: "0 0 auto",
  display: "flex",
});
export const DGTableBody = styled("div")({
  flex: "1 0 auto",
});
export const DGTableRow = styled("div")({
  display: "flex",
  flexDirection: "row",
});
export const DGTableCell = styled("div")({
  border: "1px solid",
  borderTop: 0,
  borderRight: 0,
});
export const DGTableHeaderCell = styled("div")({
  border: "1px solid",
  borderTop: 0,
  borderRight: 0,
});
