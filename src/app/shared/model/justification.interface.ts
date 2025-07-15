import { ApprovalStatus } from "./attendance.interface";
import { User } from "./user.interface";

export class Justification {

id:string;
studentId: string;
student?: User;
date: Date;
reason: string;
attachments?: JustificationAttachment[];
status: ApprovalStatus
reviewById?: string;
reviewedBy?:User;
reviewedAt?:Date;
createdAt: Date;
updatedAt: Date;

constructor(id: string, studentId: string, date: Date, reason: string, status: ApprovalStatus, createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.studentId = studentId;
    this.date = date;
    this.reason = reason;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

}

export enum JustificationType
{
    salute = 'DI SALUTE',
    familiare = 'FAMILIARE',
    personale = 'PERSONALE',
    altro = 'ALTRO',
}

export interface JustificationAttachment
 {
    filename:string;
    url: string;
    uploadedAt: Date;
}