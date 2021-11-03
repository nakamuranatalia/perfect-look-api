const { Router } = require('express');
const productController = require('../controllers/ProductsController');

const product = new productController()

const router = Router()

router
    .post('/api/v1/products', product.create)
    .get('/api/v1/products', product.findAll)
    .get('/api/v1/products/:id', product.findById)
    .put('/api/v1/products/:id', product.update)
    .delete('/api/v1/products/:id', product.delete)

module.exports = router;