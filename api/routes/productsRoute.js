const { Router } = require('express');
const productController = require('../controllers/ProductsController');

const product = new productController()

const router = Router()

router
    .post('/api/v1/products', product.createProduct)
    .get('/api/v1/products', product.retrieveAllProduct)
    .get('/api/v1/products/:id', product.retriveProductById)
    .put('/api/v1/products/:id', product.updateProduct)
    .delete('/api/v1/products/:id', product.deleteProduct)

module.exports = router;