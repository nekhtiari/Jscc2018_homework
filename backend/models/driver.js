const mongoose = require('mongoose')

const DriverSchema = new mongoose.Schema({
    name: String,
    age: Number
})

module.exports = mongoose.model('driver', DriverSchema);




