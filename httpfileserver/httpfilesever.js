var http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    path = process.argv[3];
console.log(process.argv[3]);
//create server
var server = http.createServer(function(request,response) {
    res.writeHead(200, {'content-type':'text/plain'});
    var file = fs.createReadStream(path);
    file.pipe(response);

});
server.listen(port);