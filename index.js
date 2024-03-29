const express = require('express');
const app = express();
const server = require('http').createServer(app);

const io = require('socket.io').listen(server);

users = [];
connections = [];

server.listen(process.env.PORT || 4000);
console.log("Server running....");

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

io.sockets.on('connection', (socket)=>{
    connections.push(socket);
    console.log("Connected socket :", connections.length());

    //Disconnected
    connections.splice(connections.indexOf(socket),1);
    console.log("Disconnected..! Socket connected", connections.length());
})