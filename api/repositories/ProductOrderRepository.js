const db = require('../models')

class ProductOrderRepository{

    async create(infos, {orderId}){
        for(const element of infos.products){
            const productOrder = {
                orderId: orderId,
                productId: element.productId,
                quantity: element.quantity
            }
            await db.ProductsOrders.create(productOrder)
        }
    }

    async findById({id}){
        return db.ProductsOrders.findAll({
            where: {orderId:Number(id)},
            attributes: ["productId", "quantity"],
            raw:true
        })
    }
    
}

module.exports = ProductOrderRepository;