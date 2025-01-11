"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { User } from "@prisma/client";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export const teacherColumns: ColumnDef<User>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    id: "contact",
    accessorKey: "contact",
    header: "Mobile Number",
    cell: ({ row }) => <div>{row.getValue("contact")}</div>,
  },
  {
    id: "email",
    accessorKey: "email",
    header: "Email Id",
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
  },
  {
    id: "subject",
    accessorKey: "subject",
    header: "Subject",
    cell: ({ row }) => <div>{row.getValue("subject")}</div>,
  },
  {
    id: "attendance",
    accessorKey: "attendance",
    header: "Attendance",
    cell: ({ row }) => <div>{row.getValue("attendance")}</div>,
  },
];

type Props = {
  users: User[];
};

const TeacherTable = ({ users }: Props) => {
  const table = useReactTable({
    data: users,
    columns: teacherColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {},
  });

  return (
    <div className="w-full mt-5 border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={teacherColumns.length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TeacherTable;
