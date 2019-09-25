const webs = require('ws'),
    Clients = [],
    server = webs.Server({port: 8080});


server.on('connection', function connection(ws) {
    Clients.push(ws);
    ws.on("message", function incoming(message) {
        console.log('received: %s', message);
        broadcastToAll(message);
    });
});

function broadcastToAll(msg){
    server.clients.forEach(function each(client){
        if(client !== ws && client.readyState === webs.OPEN){
            client.send(msg);
        }
    });
};