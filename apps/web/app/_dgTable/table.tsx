"use client";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import {
  DGDataGrid,
  mockColumns,
  getMockData,
  CustomTheme,
} from "@repo/ui-components";
const mockData = getMockData(100);

export default function DGTable() {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={CustomTheme}>
        <Box sx={{ width: "400px", height: "400px" }}>
          <DGDataGrid data={mockData} columns={mockColumns} />
        </Box>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
