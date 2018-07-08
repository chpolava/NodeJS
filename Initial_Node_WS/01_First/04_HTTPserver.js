var http = require('http');

var server = http.createServer(function(req, res){
    console.log('connection from ' + req.url);
    res.write("Chetan is the data now");
    res.end('Connection ended');
}).listen(7000, "192.168.1.102");