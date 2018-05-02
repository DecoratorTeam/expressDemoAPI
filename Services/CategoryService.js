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

//GetCategoryById
router.get('/GetCategoryById/:_id',function(req,res) {
    categories.getCategoryById(req.params._id,function(err,categories){
        console.log(req.params.categoryID);
          if(err)
          {
            console.log(err);
          }          
          res.json(categories);
     });
 });

module.exports = router;