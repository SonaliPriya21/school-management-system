"use client";

import { Attendance } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TableComponent from "./TableComponent";

export const attendanceColumns: ColumnDef<Attendance>[] = [
  {
    id: "class",
    accessorKey: "Class",
    header: "Class",
    cell: ({ row }) => <div>{row.getValue("class")}</div>,
  },
  {
    id: "section",
    accessorKey: "section",
    header: "Section",
    cell: ({ row }) => <div>{row.getValue("section")}</div>,
  },
  {
    id: "totalStudent",
    accessorKey: "totalStudent",
    header: "Total Student",
    cell: ({ row }) => <div>{row.getValue("totalStudent")}</div>,
  },
  {
    id: "present",
    accessorKey: "present",
    header: "Present",
    cell: ({ row }) => <div>{row.getValue("present")}</div>,
  },
  {
    id: "absent",
    accessorKey: "absent",
    header: "Absent",
    cell: ({ row }) => <div>{row.getValue("absent")}</div>,
  },
];

type Props = {
  attendance: Attendance[];
};

const AttendanceTable = ({ attendance }: Props) => {
  return <TableComponent data={attendance} columns={attendanceColumns} />;
};
export default AttendanceTable;
