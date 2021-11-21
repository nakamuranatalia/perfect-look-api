const db = require('../models')

class PurchaseOrderRepository{

    async create(purchaseOrder){
        return db.PurchaseOrders.create(purchaseOrder)
    }

    async findById({id}){
        return db.PurchaseOrders.findOne({
            where: {id:Number(id)},
            include:[{
                model: db.Products,
                attributes: ['id', 'name'],
                through:{
                    model: db.ProductsOrders,
                    attributes:['quantity']
                }
            }]
        })
    }

}

module.exports = PurchaseOrderRepository;