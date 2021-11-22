const express = require ('express')
const products = require('./productsRoute')
const users = require('./usersRoute')
const cart = require('./cartRoute')
const order = require('./purchaseOrdesRoute')
const recommendation = require('./recommendationRoute')

module.exports = app => {
    app.use(express.json(),
    products,
    users,
    cart, 
    order,
    recommendation)
}