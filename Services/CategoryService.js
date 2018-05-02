var express = require('express');
var router = express.Router();
var categories = require('../Models/Categories');

//Get All categories
router.get('/GetAllCategories',function(req,res){
    categories.getAllCategories(function(err,categories){
		if (err) 
			res.send(err);
		else
			res.send(categories);        
			console.log(categories);    
	});
});


module.exports = router;