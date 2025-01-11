"use client";

import { ColumnDef } from "@tanstack/react-table";
import { User } from "@prisma/client";
import TableComponent from "./TableComponent";

export const studentColumns: ColumnDef<User>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: "Student name",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    id: "class",
    accessorKey: "class",
    header: "Class",
    cell: ({ row }) => <div>{row.getValue("class")}</div>,
  },
  {
    id: "rollNo",
    accessorKey: "rollNo",
    header: "Roll No",
    cell: ({ row }) => <div>{row.getValue("rollNo")}</div>,
  },
  {
    id: "attendance",
    accessorKey: "attendance",
    header: "Attendance",
    cell: ({ row }) => <div>{row.getValue("attendance")}</div>,
  },
];

type Props = {
  students: User[];
};

const StudentTable = ({ students }: Props) => {
  return <TableComponent data={students} columns={studentColumns} />;
};
export default StudentTable;
