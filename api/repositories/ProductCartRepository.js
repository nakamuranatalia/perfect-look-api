const db = require('../models')

class ProductCartRepository{

    async create(infos, {cartId}){
        for(const element of infos.products){
            const productCart = {
                cartId: cartId,
                productId: element.productId,
                quantity: element.quantity
            }
            await db.ProductsCarts.create(productCart)
        }
    }

    async delete({cartId}){
        return db.ProductsCarts.destroy({
            where:{
                cartId:Number(cartId)
            }
        })
    }

    async findById({id}){
        return db.ProductsCarts.findAll({
            where: {cartId:Number(id)},
            attributes: ["productId", "quantity"],
            raw:true
        })
    }

}
module.exports = ProductCartRepository