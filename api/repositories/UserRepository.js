const db = require('../models')

class UserRepository{
    async create(infos){
        return db.Users.create(infos)
    }
    
    async findAll(){
        return db.Users.findAll();
    }

    async findById({id}){
        return db.Users.findOne({where: {id:Number(id)}})
    }

    async update(infos, {id}){
        return db.Users.update(infos, {where: {id:Number(id)}})
    }

    async delete({id}){
        return db.Users.destroy({where: {id:Number(id)}})
    }
}

module.exports = UserRepository