"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Class } from "@prisma/client";

import TableComponent from "./TableComponent";

export const classCoulmns: ColumnDef<Class>[] = [
  {
    id: "class",
    accessorKey: "class",
    header: "Class number",
    cell: ({ row }) => <div>{row.getValue("class")}</div>,
  },
  {
    id: "section",
    accessorKey: "section",
    header: "Section",
    cell: ({ row }) => <div>{row.getValue("section")}</div>,
  },
  {
    id: "teacher",
    accessorKey: "teacher",
    header: "Teacher",
    cell: ({ row }) => <div>{row.getValue("teacher")}</div>,
  },
  {
    id: "totalStudent",
    accessorKey: "totalStudent",
    header: "Total student",
    cell: ({ row }) => <div>{row.getValue("totalStudent")}</div>,
  },
  {
    id: "attendance",
    accessorKey: "attendance",
    header: "Attendance",
    cell: ({ row }) => <div>{row.getValue("attendance")}</div>,
  },
];

type Props = {
  class: Class[];
};

const ClassTable = ({ class: classData }: Props) => {
  return <TableComponent data={classData} columns={classCoulmns} />;
};

export default ClassTable;
