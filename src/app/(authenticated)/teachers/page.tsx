import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TeacherTable from "@/components/custom/TeacherTable";
import Link from "next/link";
import { getTeachers } from "@/app/actions/teacher";

const teacher = async () => {
  const teacher = await getTeachers();
  return (
    <div className="m-5">
      <div className=" flex flex-row justify-between">
        <Input className="w-72" type="text" placeholder="Search teachers..." />
        <Button>
          <Link href={"/teachers/add"}>Add teacher</Link>
        </Button>
      </div>
      <TeacherTable users={teacher} />
    </div>
  );
};

export default teacher;
