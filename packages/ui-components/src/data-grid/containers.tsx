"use client";
import { styled } from "@mui/material";

export const DGTable = styled("div")({
  display: "flex",
  flexDirection: "column",
  background: "#ccc",
  overflowX: "auto",
  width: "100%",
  height: "100%",
});
export const DGTableHeader = styled("div")({
  flex: "0 0 auto",
  display: "flex",
});
export const DGTableBody = styled("div")({
  display: "flex",
  flexDirection: "column",
  flex: "1 0 auto",
  overflowY: "scroll",
  height: 0,
});
export const DGTableRow = styled("div")({
  display: "flex",
  flexDirection: "row",
});
export const DGTableCell = styled("div")({
  border: "1px solid",
  borderTop: 0,
  borderRight: 0,
  padding: "8px",
  display: "flex",
  flex: "0 0 auto",
});
export const DGTableHeaderCell = styled("div")({
  border: "1px solid",
  borderTop: 0,
  borderRight: 0,
  padding: "8px",
});
