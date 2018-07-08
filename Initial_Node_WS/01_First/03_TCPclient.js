var net = require('net');

var client = new net.Socket();
client.connect(7000, "192.168.1.102");

client.on('data',function(data){
    console.log('Data: ' + data);
    client.destroy();
});

client.on('close', function(){
    console.log('Client connection closed');
});