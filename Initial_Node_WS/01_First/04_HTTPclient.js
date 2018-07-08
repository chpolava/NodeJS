var http = require('http');

var client = http.get("http://192.168.1.102:7000", function(err){});
//client.address(7000, "192.168.1.102");


// Not working properly
client.listeners('res',function(data){
    console.log('Data: ' + data);
    client.destroy();
});

client.addListener('close', function(){
    console.log('Client connection closed');
});