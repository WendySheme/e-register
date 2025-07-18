import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { WebSocketServiceService } from '../service/web-socket-service.service';


import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-notification-component',
  templateUrl: './notification-component.component.html',
  styleUrls: ['./notification-component.component.css'],
  standalone: true,
  imports: [JsonPipe]
})

@Component({
  selector: 'app-notification-component',
  templateUrl: './notification-component.component.html',
  styleUrls: ['./notification-component.component.css']
})
export class NotificationComponentComponent implements OnInit, OnDestroy {
  notifications: any[] = [];

  constructor(@Inject(WebSocketServiceService) private webSocketService: WebSocketServiceService) { }

  ngOnInit(): void {
    this.webSocketService.connect();

    this.webSocketService.message$.subscribe(message => {
      console.log('Message received:', message);
      this.notifications.push(message);
    });

    
    this.webSocketService.joinRoom('notifications_room');
  }

  ngOnDestroy(): void {
    this.webSocketService.disconnect();
  }
}
