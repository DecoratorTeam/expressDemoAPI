var http = require('http');
var mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
//const port = 3000;
const port = process.env.PORT || 3000;
var categories = require('./Models/Categories');
var orders = require('./Models/Orders');

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

  
app.get('/',function(req,res){
    categories.getAllCategories(function(err,categories){
		if (err) 
			res.send(err);
		else
			res.send(categories);        
			console.log(categories);    
	});
});

app.get('/GetOrderById/:orderID',function(req,res) {
    orders.getOrderById(req.params.orderID,function(err,orders){
        console.log(req.params.orderID);
          if(err)
          {
            console.log(err);
          }          
          res.json(orders);
     });
 });

app.listen(port,() => console.log('server is running on port ' + port));