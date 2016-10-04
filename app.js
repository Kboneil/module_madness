var http = require('http');
var compile = require('./compile');


http.createServer(function (req, res) {
  res.writeHead(200);
  //response body
  res.write(compile.accountBalance());
  res.write(compile.putTogether());
  //send
  res.end();
}).listen(3000);
