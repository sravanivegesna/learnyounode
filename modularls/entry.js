var work = require('./module');

var callback = function(err, data) {
    if(err){
        return console.error(err);
    }
    data.forEach(function(file){
        console.log(file);
    });
}
//console.log(process.argv[2]);work(process.argv[2],process.argv[3],callback);