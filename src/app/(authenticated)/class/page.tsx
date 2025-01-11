import ClassTable from "@/components/custom/ClassTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getClass } from "@/app/actions/class";
import Link from "next/link";

const Class = async () => {
  const classData = await getClass();
  return (
    <div className="m-5">
      <div className=" flex flex-row justify-between">
        <Input className="w-72" type="text" placeholder="Search class..." />
        <Button>
          <Link href={"/class/add"}>Add class</Link>
        </Button>
      </div>
      <ClassTable class={classData} />
    </div>
  );
};

export default Class;
