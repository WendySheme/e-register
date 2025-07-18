// tutor-dashboard.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebSocketServiceService } from '../service/web-socket-service.service';

import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-tutor-dashboard',
  templateUrl: './tutor-dashboard-component.component.html',
  
  imports: [JsonPipe]

})
export class TutorDashboardComponent implements OnInit, OnDestroy {
  notifications: any[] = [];

  constructor(private webSocketService: WebSocketServiceService) { }

  ngOnInit(): void {
    this.webSocketService.connect();
    this.webSocketService.joinRoom('tutor_room');

    this.webSocketService.message$.subscribe(message => {
      console.log('Message received:', message);
      this.notifications.push(message);
    });
  }

  ngOnDestroy(): void {
    this.webSocketService.disconnect();
  }
}
