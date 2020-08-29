var http = require('https');
var events = require('events');
var count = 0;
var eventEmitter = new events.EventEmitter();
var serv = http.createServer(function(req, res){
    eventEmitter.emit('a request is done');// event trigger
    res.end('success');
});
eventEmitter.on('a request is done',function(){
    count =count+1;
    console.log(count +' request is done');// event listener
});
serv.listen(3000,'localhost',function(){
    console.log("Server started at localhost port 3000");
});