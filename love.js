var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var app = express();
var routes = require('./routes/index');
app.set('views',path.join(__dirname, 'views'));
app.engine(".html",ejs.__express);
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.get('*', function(req, res){
    res.writeHead(200, {"Content-Type": "text/plain"});    
    res.write("404");    
    res.end(); 
});
app.listen(3001,function(){
    console.log("================start on port "+3001+"==================")
});