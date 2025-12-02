import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "../components/ui/table";
import CommonButton from "../components/widgets/common_button";
import { AiFillEdit } from "react-icons/ai";
import { Trash2 } from "lucide-react";

const CommonTable = ({
  columns = [],
  rows = [],
  showEdit = false,
  showDelete = false,
  onEdit = () => {},
  onDelete = () => {},
}) => {
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

            {(showEdit || showDelete) && (
              <TableHead className="text-center w-28">Actions</TableHead>
            )}
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

                {(showEdit || showDelete) && (
                  <TableCell>
                    <div className="flex items-center gap-2 justify-center">
                      {showEdit && (
                        <CommonButton
                          variant="outline"
                          className="size-9"
                          onClick={() => onEdit(row)}
                        >
                          <AiFillEdit className="size-5" />
                        </CommonButton>
                      )}

                      {showDelete && (
                        <CommonButton
                          variant="outline"
                          className="size-9"
                          onClick={() => onDelete(row)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </CommonButton>
                      )}
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))
          ) : (
            <TableRow className="h-32">
              <TableCell
                colSpan={columns.length + 1}
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