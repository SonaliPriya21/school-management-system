import { getStudents } from "@/app/actions/user";
import StudentTable from "@/components/custom/StudentTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Students = async () => {
  const students = await getStudents();
  return (
    <div className="m-5">
      <div className=" flex flex-row justify-between">
        <Input className="w-72" type="text" placeholder="Search students..." />
        <Button>
          <Link href={"/student/add"}>Add student</Link>
        </Button>
      </div>
      <StudentTable students={students} />
    </div>
  );
};

export default Students;
