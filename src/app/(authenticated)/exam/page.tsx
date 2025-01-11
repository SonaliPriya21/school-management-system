import ExamTable from "@/components/custom/ExamTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getExam } from "@/app/actions/exam";
import Link from "next/link";

const Exam = async () => {
  const examData = await getExam();
  return (
    <div className="m-5">
      <div className="flex flex-row justify-between">
        <Input className="w-72" type="text" placeholder="Search exam..." />
        <Button>
          <Link href={"/exam/add"}>Schedule exam</Link>
        </Button>
      </div>
      <ExamTable exam={examData} />
    </div>
  );
};

export default Exam;
