import { Attendance, attendanceStatus } from "./attendance.interface";
import { studentStats } from "./dashboard.interface";
import { Error } from "./error.interface";
import { Justification } from "./justification.interface";
import { Notification } from "./notification.interface";
import { User } from "./user.interface";

export class AppState
 {

user: User | null;
isAuthenticated: boolean;
loading:boolean;
error: Error | null;
notifications: Notification[];

}

export interface StudentState extends AppState 
{
    attendances : Attendance[];
    justifications : Justification[];
    stats : attendanceStatus | null;
    currentMonth: Date;
}

export interface TutorState extends AppState
{

    students : User[];
    pendingAttendance : Attendance [];
    pendingJustification : Justification[];
    studentStats: studentStats[];



}