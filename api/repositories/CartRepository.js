const db = require('../models')

class CartRepository{

    async create(cart){
        return db.Carts.create(cart)
    }

    async findById({id}){
        return db.Carts.findOne({
            where: {id:Number(id)},
            include:[{
                model: db.Products,
                attributes: ['id', 'name'],
                through:{
                    model: db.ProductsCarts,
                    attributes:['quantity']
                }
            }]
        })
    }

    async update(infos, {id}){
        return db.Carts.update(infos, {where: {id:Number(id)}})
    }

    async delete({id}){
        db.ProductsCarts.destroy({where:{cartId:Number(id)}})
        return db.Carts.destroy({where:{id:Number(id)}})
    }

}

module.exports = CartRepository