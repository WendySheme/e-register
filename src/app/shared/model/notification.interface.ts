import { User } from "./user.interface";

export class Notification {

id: number;
recipientId: number;
recipient?: User
senderId: number;
sender?: User;
type: NotificationType;
message: string;
isRead:boolean;
createdAt: Date;   
updatedAt: Date;


constructor(id: number, recipientId: number, senderId: number, type: NotificationType, message: string, isRead: boolean, createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.recipientId = recipientId;
    this.senderId = senderId;
    this.type = type;
    this.message = message;
    this.isRead = isRead;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }


}
export enum NotificationType
 {
    info = 'INFO',
    warning = 'WARNING',
    error = 'ERROR',
    success = 'SUCCESS',
    remider = 'REMINDER',
    alert = 'ALERT'


    
}
