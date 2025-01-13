import db from "../lib/prisma";

export const getClassTimeTable = async (classId: string) => {
  try {
    const classSchedules = await db.schedule.findMany({
      where: {
        teacherAssignment: {
          classId,
        },
      },
      include: {
        teacherAssignment: {
          include: {
            teacher: true,
          },
        },
      },
    });

    if (classSchedules.length === 0) {
      return { error: "No schedules found for this class." };
    }

    // Format the timetable
    const timetable = classSchedules.map((schedule) => ({
      day: schedule.day,
      startTime: schedule.startTime,
      endTime: schedule.endTime,
      subject: schedule.teacherAssignment.teacher.subject,
      teacherName: schedule.teacherAssignment.teacher.name,
    }));

    return { classId, timetable };
  } catch (error) {
    console.error(error);
    return { error: "An error occurred while fetching the class timetable." };
  }
};

export const getTeacherTimeTable = async (teacherId: string) => {
  try {
    const teacherSchedules = await db.schedule.findMany({
      where: {
        teacherAssignment: {
          teacherId,
        },
      },
      include: {
        teacherAssignment: {
          include: {
            class: true, // Fetch class details
            teacher: true, // Fetch teacher details
          },
        },
      },
    });

    if (teacherSchedules.length === 0) {
      return { error: "No schedules found for this teacher." };
    }

    // Format the timetable
    const timetable = teacherSchedules.map((schedule) => ({
      day: schedule.day,
      startTime: schedule.startTime,
      endTime: schedule.endTime,
      subject: schedule.teacherAssignment.teacher.subject,
      className: schedule.teacherAssignment.class?.class,
    }));

    return { teacherId, timetable };
  } catch (error) {
    console.error(error);
    return {
      error: "An error occurred while fetching the teacher timetable.",
    };
  }
};
