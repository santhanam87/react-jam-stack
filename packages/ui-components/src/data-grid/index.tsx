"use client";
import { Typography, styled } from "@mui/material";
import Button from "@mui/material/Button";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import {
  DGTable,
  DGTableHeader,
  DGTableHeaderCell,
  DGTableBody,
  DGTableRow,
  DGTableCell,
} from "./containers";

export type LIDataGridProps<Row> = {
  data: Row[];
  columns: ColumnDef<Row>[];
};
export function DGDataGrid<Row>({ data, columns }: LIDataGridProps<Row>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <DGTable>
      <DGTableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <DGTableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <DGTableHeaderCell key={header.id}>
                <Typography variant='button'>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Typography>
              </DGTableHeaderCell>
            ))}
          </DGTableRow>
        ))}
      </DGTableHeader>
      <DGTableBody>
        {table.getRowModel().rows.map((row) => (
          <DGTableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <DGTableCell key={cell.id}>
                <Typography variant='caption'>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Typography>
              </DGTableCell>
            ))}
          </DGTableRow>
        ))}
      </DGTableBody>
    </DGTable>
  );
}
