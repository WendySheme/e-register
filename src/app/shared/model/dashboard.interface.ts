import { Attendance, attendanceStatus } from "./attendance.interface";
import { Justification } from "./justification.interface";
import { User } from "./user.interface";

export interface studentDashboard {
attendaces: Attendance[];
justitications: Justification[];
stats: attendanceStatus;
notifications: Notification[];

}

export interface tutorDashboard {
    pendingAttendances: Attendance[];
    pendingJustifications: Justification[];
    students: User[];
    studentStats: studentStats[];
}

export interface studentStats {
    student: User;
    totalAttendance: number;
    presentCount: number;
    absentCount: number;
    attendancePercentage: number;
    pendingApprovals: number;
}