const webs = require('ws'),
    Client = [],
    server = webs.Server({port: 8080});


server.on('connection', ws => {
    Client.push(ws);
    server.on()
});