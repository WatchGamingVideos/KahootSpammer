const { join } = require("kahoot.js-updated");
const Kahoot = require("kahoot.js-updated");

var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
    socket.on('bot', (pin, name) => {
        console.log("BOTTING on "+pin);
        sendBots(name, pin, 10)
      });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});

function sendBots(name, pin, amount){
    for (var i = 0; i < amount; i++){
        try {
            joinGame(name+(i), pin);
        } catch (error) {
            
        }
    }
}



function joinGame(name, pin){
    try {
      client = new Kahoot();
      console.log("Joining kahoot...");
      client.join(pin, name);
    } catch (error) {
      
    }
    
}

io.on('connection', (socket) => {
    console.log('a user connected');
  });