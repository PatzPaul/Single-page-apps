var http = require('http');
var port = 3000;

var requestHandler = function (req, res) {
  console.log(req.url);
  res.end('Wahgwan from node server');
}

var server = http.createServer(requestHandler);
server.listen(port);

console.log('Node server listening on port 3000');