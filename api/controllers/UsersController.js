const db = require('../models')

class UsersController{
    async create (req, res){
        const newUser = req.body
        try {
            const newCreatedUser = await db.Users.create(newUser)
            return res.status(200).json(newCreatedUser)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    async findAll (req, res){
        try {
            const allUsers = await db.Users.findAll();
            return res.status(200).json(allUsers)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    async findById (req, res){
        const {id} = req.params
        try {
            const oneUser = await db.Users.findOne({where: {id:Number(id)}})
            res.status(200).json(oneUser)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    async update (req, res){
        const {id} = req.params
        const infos = req.body
        try {
            await db.Users.update(infos, {where: {id:Number(id)}})
            const updatedUsers = await db.Users.findOne({where: {id:Number(id)}})
            res.status(200).json(updatedUsers)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    async delete(req, res){
        const {id} = req.params
        try {
            await db.Users.destroy({where: {id:Number(id)}})
            res.status(200).json({message: `The User ${id} has been deleted`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UsersController;