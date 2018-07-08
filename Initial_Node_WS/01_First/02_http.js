var _http = require('http');

_http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/html'});
response.end('Hello World!!!');
}).listen(8080);

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('hello world from write fn' + "\n");
	res.write(req.url);
	var q = url.parse(req.url, true).query;
	res.write(q.abc + ' ' + q.mno);
	res.end('end');  // comments: after end no line gets executed
    res.end('Hello World!');
	res.end('end');
}).listen(8081);