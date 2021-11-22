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

    async findColumn(id, columns){
        return db.Products.findOne({
            where: {id:id},
            attributes: [columns],
            raw:true
        })
    }

    async findColumns(id, columnOne, columnTwo, columnThree){
        return db.Products.findOne({
            where: {id:id},
            attributes: [columnOne, columnTwo, columnThree],
            raw:true
        })
    }

    async findByBrand(brand){
        return db.Products.findAll({
            where: {brand: brand},
            raw:true
        })
    }

    async update(infos, {id}){
        return db.Products.update(infos, {where: {id:Number(id)}})
    }

    async delete({id}){
        return db.Products.destroy({where: {id:Number(id)}})
    }
}

module.exports = ProductRepository