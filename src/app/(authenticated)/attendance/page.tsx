import { getAttendances } from "@/app/actions/attendance";
import AttendanceTable from "@/components/custom/AttendanceTable";
import { Input } from "@/components/ui/input";

const Attendance = async () => {
  const attendance = await getAttendances();
  return (
    <div className="m-5">
      <div className=" flex flex-row justify-between">
        <Input className="w-72" type="text" placeholder="Search class..." />
      </div>
      <AttendanceTable attendance={attendance} />
    </div>
  );
};

export default Attendance;
