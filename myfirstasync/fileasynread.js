var fs = require('fs');
fs.readFile(process.argv[2], function(err, data) {
    if (err) console.log(err);
    var count = data.toString().split("\n").length - 1;
    console.log(count);
    return count;
});