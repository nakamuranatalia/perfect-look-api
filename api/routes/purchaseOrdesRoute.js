const { Router } = require('express');
const PurchaseOrderController = require('../controllers/PurchaseOrderController');

const order = new PurchaseOrderController

const router = Router()

router
    .post('/api/v1/purchase-order', order.create)
    .get('/api/v1/purchase-order/:id', order.findById)
    .patch('/api/v1/purchase-order/:id', order.update)

module.exports = router;