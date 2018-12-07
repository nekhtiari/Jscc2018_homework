const mongoose = require('mongoose')

const ResturantSchema = new mongoose.Schema({
    name: String,
    cuisinetype: String,
    location: String,
    customerinfo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    }],

    foodinfo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'food'
    }]
    
})

module.exports = mongoose.model('resturant', ResturantSchema);
