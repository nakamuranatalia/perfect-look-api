const CartRepository = require("../repositories/CartRepository")
const ProductRepository = require("../repositories/ProductRepository")
const PurchaseOrderRepository = require("../repositories/PurchaseOrderRepository")
const ProductOrderRepository = require("../repositories/ProductOrderRepository")
const Producer = require("../producer/producer")

const cartRepository = new CartRepository
const productRepository = new ProductRepository
const purchaseOrderRepository = new PurchaseOrderRepository
const productOrderRepository = new ProductOrderRepository
const producer = new Producer


class PurchaseOrderService{
    
    async deleteCart(infos){
        const cartId = await this.findCart(infos)
        await cartRepository.delete(cartId)
    }
    
    async findCart(infos){
        const userId = infos.userId
        return cartRepository.findByUserId(userId)
    }

    async brands(infos){
        let brands = []
        for(const element of infos.products){
            const brand = await productRepository.findColumn(element.productId, "brand")
            brands.push(brand.brand)
        }
        return brands
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

        const brands = await this.brands(infos)
        for(let i=0; i < brands.length; i++){
            const obj = new Object()
            obj.brand = brands[i]
            obj.userId = infos.userId
            await producer.produce(obj)
        }

        return purchaseOrderRepository.findById({id: orderId.dataValues.id})
    }

    async findById({id}){
        return purchaseOrderRepository.findById({id})
    }

    async searchProductsAndQuantities({id}){
        return productOrderRepository.findById({id})
    }
    
    async inventorySum(infos, column){
        let productsQuantityTotal = []
        let productsQuantityOrder = []
        let productsId = []
        let updatedProductQuantity = []

        for(let i=0; i < infos.length; i++){
            const productId = infos[i].productId
            productsId.push(productId)
            productsQuantityOrder.push(infos[i].quantity)

            const productsQuantity = await productRepository.findColumn(productId, column)
            productsQuantityTotal.push(productsQuantity.quantity)
        }

        updatedProductQuantity = productsQuantityTotal.map((a,i) => a + productsQuantityOrder[i])

        for(let i=0; i < productsId.length; i++){
            productRepository.update({quantity:updatedProductQuantity[i]}, {id:productsId[i]})
        }

    }

    async update(infos, {id}){
        if(infos.status === "canceled"){
            const productsAndQuantities = await this.searchProductsAndQuantities({id})
            await this.inventorySum(productsAndQuantities, "quantity") 
        }

        await purchaseOrderRepository.update(infos, {id})
        return purchaseOrderRepository.findById({id})
    }
}

module.exports = PurchaseOrderService;