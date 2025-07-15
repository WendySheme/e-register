import { User } from "./user.interface";

export class Attendance {

id: string;
studentId: string;
student?: User
date: Date;
status: attendanceStatus;
timeIn: Date;
timeOut: Date;
approvalStatus: ApprovalStatus;
approvedById?: string;
approvedby?: User;
approvedAt?: Date;
rejectionReason?:string;
creaatedAt: Date;
updatedAt: Date;

constructor(id: string, studentId: string, date: Date, status: attendanceStatus, timeIn: Date, timeOut: Date, approvalStatus: ApprovalStatus, createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.studentId = studentId;
    this.date = date;
    this.status = status;
    this.timeIn = timeIn;
    this.timeOut = timeOut;
    this.approvalStatus = approvalStatus;
    this.creaatedAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export enum attendanceStatus {
    PRESENT = 'PRESENT',
    absent= 'ABSENT',
    justified = 'JUSTIFIED',
}

export enum ApprovalStatus {
    pending = 'PENDING',
    approved = 'APPROVED',
    rejected = 'REJECTED',
}

export interface AttendanceResponse {
    statusStats : StatusStats[];
    approvalStats: StatusStats[];
    attendanceRate: number;
    period: string;

}

export interface StatusStats
{
    status: attendanceStatus;
    count: number;
}