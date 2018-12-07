const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({
    name: String,
    price: Number
})

module.exports = mongoose.model('food', FoodSchema);


