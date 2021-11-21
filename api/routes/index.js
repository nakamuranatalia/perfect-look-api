const express = require ('express')
const products = require('./productsRoute')
const users = require('./usersRoute')
const cart = require('./cartRoute')
const order = require('./purchaseOrdesRoute')

module.exports = app => {
    app.use(express.json(),
    products,
    users,
    cart, 
    order)
}