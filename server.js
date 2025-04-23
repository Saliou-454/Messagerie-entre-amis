const express = require('express');
const socket = require('socket.io');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const server = app.listen(3001, () => {
    console.log('Backend is running on port 3001');
});

const io = socket(server);

io.on('connection', socket => {
    console.log('New user connected');

    socket.on('send_message', (message) => {
        io.emit('receive_message', message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
