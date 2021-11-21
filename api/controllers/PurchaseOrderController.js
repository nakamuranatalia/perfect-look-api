const PurchaseOrderService = require('../services/PurchaseOrderService')
const service = new PurchaseOrderService


class PurchaseOrderController{

    async create (req, res){
        const newProduct = req.body
        try {
            const newCreatedProduct = await service.create(newProduct)
            return res.status(200).json(newCreatedProduct)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = PurchaseOrderController;