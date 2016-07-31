var http = require('http');
var contact = require('concat-stream');

http.get(process.argv[2],function(response) {
    response.setEncoding('utf8');
    response.on('error',console.error);
    var concatBuffer = contact(function(buffer) {
        console.log(buffer.length);
        console.log(buffer);
    });
    response.pipe(concatBuffer);
});
