import { attendanceStatus } from "./attendance.interface";
import { JustificationType } from "./justification.interface";
import { UserRole } from "./user.interface";

//login form
export class Form {
email: string;
password: string;
role:UserRole;
remember?:boolean
}

export interface AttendanceForm
{
date:Date;
status:attendanceStatus;
timeIn?:Date;
timeout?:Date;
notes?:string;

}

export interface JustificationForm{
date:Date;
type: JustificationType;
reason: string;
attachments?: File[];

}

export interface ExportForm
{
format: ExportForm;
period: 'current'| 'last'| 'custom'
startDate?: Date;
endDate?: Date;
studentId?:number;
}