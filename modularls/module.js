var fs = require('fs');
var path = require('path');

module.exports = function (dirName,extName,callback) {
    //console.log(dirName);
    fs.readdir(dirName,function (err, list) {
        if (err) return callback(err);
        //console.log(list);
        ret = [];
        list.forEach(function (file) {
            if(path.extname(file) === '.' + extName)
                ret.push(file);
        });
        callback(null, ret);
    });
}

