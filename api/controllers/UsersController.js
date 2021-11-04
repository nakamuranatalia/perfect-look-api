const UserService = require("../services/UserService")
const service = new UserService

class UsersController{
    async create (req, res){
        const newUser = req.body
        try {
            const newCreatedUser = await service.create(newUser)
            return res.status(200).json(newCreatedUser)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    async findAll (req, res){
        try {
            const allUsers = await service.findAll();
            return res.status(200).json(allUsers)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    async findById (req, res){
        const {id} = req.params
        try {
            const oneUser = await service.findById({id})
            return res.status(200).json(oneUser)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    async update (req, res){
        const {id} = req.params
        const infos = req.body
        try {
            await service.update(infos, {id})
            const updatedUsers = await service.findById({id})
            res.status(200).json(updatedUsers)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    async delete(req, res){
        const {id} = req.params
        try {
            await service.delete({id})
            res.status(200).json({message: `The User ${id} has been deleted`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UsersController;