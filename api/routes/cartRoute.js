const { Router } = require('express');
const CartController = require('../controllers/CartsController');
const cart = new CartController

const router = Router()

router
    .post('/api/v1/carts', cart.create)
    .get('/api/v1/carts/:id', cart.findById)
    .patch('/api/v1/carts/:id', cart.update)
    .delete('/api/v1/carts/:id', cart.delete)

module.exports = router;