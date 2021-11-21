const CartRepository = require("../repositories/CartRepository")
const ProductRepository = require("../repositories/ProductRepository")
//const ProductCartRepository = require("../repositories/ProductCartRepository")
const PurchaseOrderRepository = require("../repositories/PurchaseOrderRepository")
const ProductOrderRepository = require("../repositories/ProductOrderRepository")

const cartRepository = new CartRepository
//const productCartRepository = new ProductCartRepository
const productRepository = new ProductRepository
const purchaseOrderRepository = new PurchaseOrderRepository
const productOrderRepository = new ProductOrderRepository


class PurchaseOrderService{
    
    async deleteCart(infos){
        const cartId = await this.findCart(infos)
        await cartRepository.delete(cartId)
    }
    
    async findCart(infos){
        const userId = infos.userId
        return cartRepository.findByUserId(userId)
    }
    
    async create(infos){
        await this.deleteCart(infos) 

        const purchaseOrder = {
            userId: infos.userId,
            totalPrice: infos.totalPrice,
            status: infos.status,
            paymentType: infos.paymentType
        }

        const orderId = await purchaseOrderRepository.create(purchaseOrder)
        await productOrderRepository.create(infos, {orderId: orderId.dataValues.id})

        return purchaseOrderRepository.findById({id: orderId.dataValues.id})

    }

    async findById({id}){
        return purchaseOrderRepository.findById({id})
    }
}

module.exports = PurchaseOrderService;