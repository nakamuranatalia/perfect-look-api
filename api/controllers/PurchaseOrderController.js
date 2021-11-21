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


    async findById(req, res){
        const {id} = req.params
        try {
            const onePurchaseOrder = await service.findById({id})
            return res.status(200).json(onePurchaseOrder)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    async update (req, res){
        const {id} = req.params
        const infos = req.body
        try {
            const updatedPurchaseOrder = await service.update(infos, {id})
            return res.status(200).json(updatedPurchaseOrder)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = PurchaseOrderController;