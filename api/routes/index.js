const express = require ('express')
const products = require('./productsRoute')
const users = require('./usersRoute')
const cart = require('./cartRoute')

module.exports = app => {
    app.use(express.json(),
    products,
    users,
    cart)
}