const db = require('../models')

class ProductRepository{
    async create(infos){
        return db.Products.create(infos)
    }
    
    async findAll(){
        return db.Products.findAll();
    }

    async findById({id}){
        return db.Products.findOne({where: {id:Number(id)}})
    }

    async update(infos, {id}){
        return db.Products.update(infos, {where: {id:Number(id)}})
    }

    async delete({id}){
        return db.Products.destroy({where: {id:Number(id)}})
    }
}

module.exports = ProductRepository