var mongoose = require('mongoose');
var categoriesSchema = mongoose.Schema({
	categoryID:{
		type:Number,
		required:true
	},
	categoryName:{
		type:String,
		required:true
	},
	categoryCode:{
		type:String,
		required:true
	},
	categoryDescription:{
		type:String,
		required:true
    },
    createdDate:{
        type:Date,
        required:true
    }	
});
var categories = module.exports = mongoose.model('categorys',categoriesSchema);

module.exports.getAllCategories = function(callback){
    categories.find(callback);
}

