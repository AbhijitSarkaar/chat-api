let express = require('express');   
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);

//https://stackoverflow.com/questions/13745519/send-custom-data-along-with-handshakedata-in-socket-io

io.on('connection', (socket) => {
    socket.on('client', (data) => {
        socket.broadcast.emit('server', data);
    });
})

server.listen(5000, () => console.log('listening to port 5000'));