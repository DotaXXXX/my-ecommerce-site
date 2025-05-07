var http = require('http');
var url = require('url');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.psrse(req.url, true).query;
  var txt = q.fname +' '+ q.lname;
  res.write(txt);
  res.end();
}).listen(8080);