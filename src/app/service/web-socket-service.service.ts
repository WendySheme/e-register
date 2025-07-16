import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { WebSocketService } from './web-socket-service.service';
import { environment } from '../../environments/environments';
import io from 'socket.io-client';
import {emit}


@Injectable({
  providedIn: 'root',
})
export class WebSocketServiceService {
  private socket: WebSocket | null = null;
  private messageSubject = new Subject<WebSocketServiceService>();
  public message$ = this.messageSubject.asObservable();

  private connectionStatusSubject = new BehaviorSubject<boolean>(false);
  public connectionStatus$ = this.connectionStatusSubject.asObservable();

  constructor() 
    if (environment.enableRealTimeUpdates) {
      this.connect();
    }
  }
  connect() : void
  {
    if (this.socket?.connected)
    {
        return;
    }
     const token = localStorage.getItem('authToken');
     this.socket = io(environment.webSocketUrl) {
      auth: {
        token: token
      },
      transport : ['websocket'],
      reconnectionAttempts: 3
      }
     ;
        this.socket.on('connect',() => {
          console.log('Connessione al WebSocket stabilita');
          this.connectionStatusSubject.next(true);
        });

        this.socket.on('disconesso', () => {
          console.log('Connessione al WebSocket persa');
          this.connectionStatusSubject.next(false);
        });

        this.socket.on('message',(message: WebSocketServiceService) => {

          this.messageSubject.next(message);
        }


        this.socket.on('attendance_update', (data) => {
          this.messageSubject.next({type:webSocketMessageType.ATTENDANCE_CREATED, data, 
            timestamp: new Date ()
        })

  }

disconnect() : void {
  if (this.socket){
    this.socket.disconnect();
    this.socket = null;
  

    this.connectionStatusSubject.next(false);
  }

  
}
emit(event: string, data: any): void {
  if(this.socket?.connected){
    this.socket.emit(event,data);
  
  }
}
}
