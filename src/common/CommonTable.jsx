import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "../components/ui/table";

const CommonTable = ({ columns = [], rows = [] }) => {
  return (
    <div className="border rounded-xl overflow-hidden">
      <Table className="whitespace-nowrap">

        <TableHeader className="bg-gray-100 dark:bg-gray-800">
          <TableRow>
            {columns.map((col) => (
              <TableHead
                key={col.field}
                style={{ width: col.width, flex: col.flex }}
                className="font-semibold text-sm"
              >
                {col.headerName}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.length > 0 ? (
            rows.map((row, rowIndex) => (
              <TableRow key={row._id || rowIndex}>
                {columns.map((col) => (
                  <TableCell key={col.field} className="py-3">
                    {col.renderCell
                      ? col.renderCell({ row, value: row[col.field] })
                      : row[col.field] ?? "-"}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow className="h-32">
              <TableCell
                colSpan={columns.length}
                className="text-center text-gray-500 font-medium"
              >
                No data found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CommonTable;