var express = require('express');
var app = express();
//var app = require('express')();

app.use(function(req, res, next){
    console.log('request to ' + req.url);
    next();
});

app.use(express.static(__dirname + '/public'));

//404 Catch all Error
app.use(function(req, res, next){
    res.status(404);
    res.send('404 - Not Found');
});

app.listen(8080);

console.log('listening on port 8080');