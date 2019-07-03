let express = require('express');   
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);

io.on('connection', (socket) => {
    socket.on('client', (data) => {
        socket.broadcast.emit('server', data);
    });
})

server.listen(5000, () => console.log('listening to port 5000'));