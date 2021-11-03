const express = require ('express')
const products = require('./productsRoute')
const users = require('./usersRoute')

module.exports = app => {
    app.use(express.json(),
    products,
    users)
}