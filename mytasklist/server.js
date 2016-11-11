//server.js

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');


var port = process.env.PORT || 9000;

// var router = express.Router();

var app = express();



// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

// api middlewear for testing the target is invoked 
// router.use(function(req, res, next){
// 	console.log('Something is happing.');
// 	next();
// }); 

// different api

app.use('/api', tasks);
app.use('/', index);

app.listen(port, function(){
	console.log('Magic happens on port: ' + port);
});