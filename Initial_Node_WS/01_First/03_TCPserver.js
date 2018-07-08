var net = require('net');

var server = net.createServer(function(socket){
    console.log('connection from ' + socket.remoteAddress);
    socket.write("Chetan is the data now");
    socket.end('Connection ended');
}).listen(7000, "192.168.1.102");