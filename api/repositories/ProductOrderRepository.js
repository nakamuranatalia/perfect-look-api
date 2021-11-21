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
    
}

module.exports = ProductOrderRepository;