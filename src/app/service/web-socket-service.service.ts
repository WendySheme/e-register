import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from '../../environments/environments';

import io from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class WebSocketServiceService {
  private socket: ReturnType<typeof io> | null = null;
  private messageSubject = new Subject<any>();
  public message$ = this.messageSubject.asObservable();

  private connectionStatusSubject = new BehaviorSubject<boolean>(false);
  public connectionStatus$ = this.connectionStatusSubject.asObservable();

  constructor() {
    if (environment.enableRealTimeUpdates) {
      this.connect();
    }
  }

  connect(): void {
    if (this.socket?.connected) {
      return;
    }
    const token = localStorage.getItem('authToken');
    this.socket = io(environment.webSocketUrl, {
      auth: { token },
      transports: ['websocket'],
      reconnectionAttempts: 3,
    });

    this.socket.on('connect', () => {
      console.log('Connessione al WebSocket stabilita');
      this.connectionStatusSubject.next(true);
    });

    this.socket.on('disconnect', () => {
      console.log('Connessione al WebSocket persa');
      this.connectionStatusSubject.next(false);
    });

    this.socket.on('message', (message: any) => {
      this.messageSubject.next(message);
    });

    this.socket.on('attendance_update', (data: any) => {
      this.messageSubject.next({
        type: 'ATTENDANCE_CREATED', 
        data,
        timestamp: new Date(),
      });
    });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      this.connectionStatusSubject.next(false);
    }
  }

  emit(event: string, data: any): void {
    if (this.socket?.connected) {
      this.socket.emit(event, data);
    }
  }
  joinRoom(room : string): void {
    this.emit('join_room', room);
  }

  leaveRoom(room: string): void {
    this.emit('leave_room', room);
  }


























} //ultimo
