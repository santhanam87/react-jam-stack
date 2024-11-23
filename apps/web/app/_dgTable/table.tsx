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
const mockData = getMockData(10);

export default function DGTable() {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={CustomTheme}>
        <Box sx={{ width: "100%", height: "100vh" }}>
          <Box sx={{ padding: 2 }}>
            <DGDataGrid data={mockData} columns={mockColumns} />
          </Box>
        </Box>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
