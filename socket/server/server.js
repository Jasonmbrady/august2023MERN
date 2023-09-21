const express = require("express");
const app = express();
const cors = require("cors");
const socket = require("socket.io");
app.use(cors());

const server = app.listen( 8000, ()=>console.log("Server listening on port 8000!"));

const io = socket( server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true
    }
});

io.on("connection", socket => {
    console.log('socket id: ' + socket.id);
    socket.broadcast.emit("Welcome", `Socket ${socket.id} just connected!`)
    socket.on("ButtonPressed", data => {
        io.emit("Update", data);
    })
})
