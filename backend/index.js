const express = require('express')
const bodyParser = require('body-parser')

const ResturantService= require('./services/resturant-service')
const CustomerService = require('./services/customer-service')

require('./mongo-connection')

const app = express()

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index')
})

// CUSTOMER ENDPOINTS

app.get('/customer/all', async (req, res) => {
  const people = await CustomerService.findAll()
  res.render('people', { people })
})

app.get('/customer/:id', async (req, res) => {
  const user = await CustomerService.find(req.params.id)
  res.render('data', { data: user })
})

app.post('/customer', async (req, res) => {
  const user = await CustomerService.add(req.body)
  res.send(user)
})

app.delete('/customer/:id', async (req, res) => {
  const user = await CustomerService.del(req.params.id)
  res.send(user)
})

// RESTURANT ENDPOINTS

app.get('/resturant/all', async (req, res) => {
  const resturants = await ResturantService.findAll()
  res.send(resturants)
})

app.get('/resturant/:id', async (req, res) => {
  const resturant = await ResturantService.find(req.params.id)
  res.send(resturant)
})

app.post('/resturant', async (req, res) => {
  const resturant = await ResturantService.add(req.body)
  res.send(resturant)
})

app.post('/resturant/addCustomer', async (req, res) => {
  const resturant = await ResturantService.addCustomer(req.body.resturantId, req.body.customerId)
  res.send(resturant)
})

app.post('/resturant/addFood', async (req, res) => {
  const resturant = await ResturantService.addFood(req.body.resturantId, req.body.foodId)
  res.send(resturant)
})

app.delete('/resturant/:id', async (req, res) => {
  const resturant = await ResturantService.del(req.params.id)
  res.send(resturant)
})

app.listen(3000, () => {
  console.log('Server listening')
})
