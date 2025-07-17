const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:4200', 'http://localhost:4201', 'http://localhost:4202'], 
    methods: ['GET', 'POST'],
  },
});

app.get('/', (req, res) => {
  res.send('<h1> Sto funzionando </h1>');
});

io.on('connection', (socket) => {
  console.log(' Nuova connessione WebSocket:', socket.id);

  const token = socket.handshake.auth?.token;
  console.log('Token ricevuto:', token);

  
  socket.emit('message', 'Benvenuto al WebSocket Server!');

  socket.on('join_room', (room) => {
    socket.join(room);
    console.log(`Socket ${socket.id} ha joinato la stanza ${room}`);
  });

  socket.on('leave_room', (room) => {
    socket.leave(room);
    console.log(`Socket ${socket.id} ha lasciato la stanza ${room}`);
  });

  
  socket.on('create_attendance', (data) => {
    io.emit('attendance_update', data);
  });

  socket.on('disconnect', () => {
    console.log('Disconnessione:', socket.id);
  });
});

server.listen(3000, () => {
  console.log('Server in ascolto su http://localhost:3000');
});