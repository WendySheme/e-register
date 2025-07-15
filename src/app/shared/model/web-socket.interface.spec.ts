import { WebSocket } from './web-socket.interface';

describe('WebSocket', () => {
  it('should create an instance', () => {
    expect(new WebSocket()).toBeTruthy();
  });
});
