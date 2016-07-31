var fs = require('fs');
var path = require('path');
console.log(process.argv[2]);
fs.readdir(process.argv[2],function (err, list) {
    if (err) console.log(err);
    //console.log(list);
    list.forEach(function (file) {
        if(path.extname(file) === '.' + process.argv[3])
            console.log(file)
    });
});