var http = require('http');
var mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
//const port = 3000;
const port = process.env.PORT || 3000;
var categoryservice = require('./Services/CategoryService');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

mongoose.connect("mongodb://sravani:sravani123@52.171.192.111:27017/decorator_db_poc");

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open',() => { mongoose.connection.db.eval('db.loadServerScripts()', function(err, result) {
	if(err)
	{
	  console.log(err);
	}          
  }); 
  console.log("Successfully connected")});

  app.use(categoryservice);

app.listen(port,() => console.log('server is running on port ' + port));