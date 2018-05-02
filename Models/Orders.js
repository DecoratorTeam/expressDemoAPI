var mongoose = require('mongoose');

module.exports.getOrderById = function(orderID,callback){        
    mongoose.connection.db.eval('GetOrdersByID('+ orderID +')',callback);
}