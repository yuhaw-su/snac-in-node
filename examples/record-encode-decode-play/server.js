var connect = require('connect');
var serveStatic = require('serve-static');
var server = connect().use(serveStatic(__dirname)).listen(8080);
var io = require('socket.io')(server);
var fs = require('fs');
console.log("Server is running on port 8080");


/*
const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8000/webSocketServer');

ws.on('open', function open() {

  try { ws.send('something'); }
catch (e) {  }
});

ws.on('message', function incoming(data, flags) {
  // flags.binary will be set if a binary data is received.
  // flags.masked will be set if the data was masked.
});*/





function now(){
  return + new Date();
}

io.on('connection', function (socket) {
  socket.on('packets', function(data){
    console.log(data.packets);

    // To write buffer down to a file....
    // var buf = data.packets.join();
    // fs.writeFile('test_'+now()+'.opus', buf, function(err) {
    //   if (err) { console.log(err); }
    // });

  })
});
