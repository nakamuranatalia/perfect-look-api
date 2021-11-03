const db = require('../models')

class ProductsController{
    async create (req, res){
        const newProduct = req.body
        try {
            const newCreatedProduct = await db.Products.create(newProduct)
            return res.status(200).json(newCreatedProduct)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    async findAll (req, res){
        try {
            const allProducts = await db.Products.findAll();
            return res.status(200).json(allProducts)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    async findById (req, res){
        const {id} = req.params
        try {
            const oneProduct = await db.Products.findOne({where: {id:Number(id)}})
            res.status(200).json(oneProduct)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    async update (req, res){
        const {id} = req.params
        const infos = req.body
        try {
            await db.Products.update(infos, {where: {id:Number(id)}})
            const updatedProducts = await db.Products.findOne({where: {id:Number(id)}})
            res.status(200).json(updatedProducts)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    async delete (req, res){
        const {id} = req.params
        try {
            await db.Products.destroy({where: {id:Number(id)}})
            res.status(200).json({message: `The Product ${id} has been deleted`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ProductsController;