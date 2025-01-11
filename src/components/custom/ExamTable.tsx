"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Exam } from "@prisma/client";

import TableComponent from "./TableComponent";

export const examCoulmns: ColumnDef<Exam>[] = [
  {
    id: "class",
    accessorKey: "class",
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
    id: "attendance",
    accessorKey: "attendance",
    header: "Attendance",
    cell: ({ row }) => <div>{row.getValue("attendance")}</div>,
  },
  {
    id: "classTeacher",
    accessorKey: "classTeacher",
    header: "Class teacher",
    cell: ({ row }) => <div>{row.getValue("classTeacher")}</div>,
  },
];

type Props = {
  exam: Exam[];
};

const ExamTable = ({ exam }: Props) => {
  return <TableComponent data={exam} columns={examCoulmns} />;
};

export default ExamTable;
