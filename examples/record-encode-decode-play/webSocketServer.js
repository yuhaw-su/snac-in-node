const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8000 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    //console.log('received: %s' message);

      console.log('received: ', message);

  });

  //ws.send('something');

  try { ws.send('something'); }
catch (e) { /* handle error */ }
});
