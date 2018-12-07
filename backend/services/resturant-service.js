const ResturantModel = require('../models/resturant')
const CustomerModel = require('../models/customer')
const FoodModel = require('../models/food')

async function addCustomer(resturantId, customerId) {
    const resturant = await ResturantModel.findOne({ _id: resturantId })
    const customer = await CustomerModel.findOne({ _id:customerId })

    resturant.customerinfo.push(customer)

    await resturant.save()

    return resturant
}

async function addFood(resturantId, foodId) {
    const resturant = await ResturantModel.findOne({ _id: resturantId })
    const food = await FoodModel.findOne({ _id:foodId })

    resturant.foodinfo.push(food)

    await resturant.save()

    return resturant
}


async function findAll() {
    return ResturantModel.find().populate('customerinfo')
}

async function add(resturant) {
    return ResturantModel.create(resturant)
}

async function del(_id) {
    return ResturantModel.remove({ _id })
}

async function find(_id) {
    return ResturantModel.findOne({ _id }).populate('customer')
}

module.exports = {
    addCustomer,
    addFood,
    findAll,
    find,
    add,
    del
}


