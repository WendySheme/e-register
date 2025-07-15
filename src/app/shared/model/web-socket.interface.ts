
import { Injectable } from '@angular/core';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';
import { Observable } from 'rxjs';


export class WebSocket {
type:WebSocketMessage;
data:any;
timestamp: Date;
constructor(type: WebSocketMessage, data: any) {
}
    }



    
    export enum WebSocketMessage 
{
ATTENDANCE_CREATED = 'attendance_created',
ATTENDANCE_APPROVED = 'attendance_approved',
ATTENDANCE_REJECTED = 'attendance_rejected',
JUSTIFICATION_CREATED = 'justification_created',
JUSTIFICATION_APPROVED = 'justification_approved',
JUSTIFICATION_REJECTED = 'justification_rejected',
USER_STATUS_CHANGED = 'user_status_changed',





}
