const CustomerModel = require('../models/customer')

async function findAll() {
    return CustomerModel.find()
}

async function add(customer) {
    return CustomerModel.create(customer)
}

async function del(_id) {
    return CustomerModel.remove({ _id })
}

async function find(_id) {
    return CustomerModel.findOne({ _id })
}

module.exports = {
    findAll,
    find,
    add,
    del
}


