const ProductRepository = require('../repositories/ProductRepository')
const repository = new ProductRepository

class ProductService{
    async create(infos){
        return repository.create(infos)
    }
    
    async findAll(){
        return repository.findAll()
    }

    async findById({id}){
        return repository.findById({id})
    }

    async update(infos, {id}){
        return repository.update(infos, {id})
    }

    async delete({id}){
        return repository.delete({id})
    }
}

module.exports = ProductService