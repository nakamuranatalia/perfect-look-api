const CartService = require("../services/CartService")
const service = new CartService

class CartsController{
    async create (req, res){
        const newProduct = req.body
        try {
            const newCreatedProduct = await service.create(newProduct)
            return res.status(200).json(newCreatedProduct)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    async findById (req, res){
        const {id} = req.params
        try {
            const oneCart = await service.findById({id})
            return res.status(200).json(oneCart)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    async update (req, res){
        const {id} = req.params
        const infos = req.body
        try {
            const updatedCart = await service.update(infos, {id})
            return res.status(200).json(updatedCart)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    async delete (req, res){
        const {id} = req.params
        try {
            await service.delete({id})
            return res.status(200).json({message: `The Cart ${id} has been deleted`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = CartsController;